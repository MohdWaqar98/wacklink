"use client";
import React, { useState, useEffect } from "react";

const Generate = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLinks = async () => {
    try {
      const res = await fetch("/api/generate");
      const data = await res.json();
      if (data?.links) {
        setLinks(data.links.reverse());
      }
    } catch (err) {
      console.error("Error fetching links:", err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const generate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });

      const result = await response.json();

      if (response.status === 400 && result?.message) {
        alert(`❌ Error: ${result.message}`);
      } else if (result?.data) {
        const fullShortUrl = `${process.env.NEXT_PUBLIC_API_URL}/${result.data.shorturl}`;
        setgenerated(fullShortUrl);
        alert(`✅ Link Generated: ${fullShortUrl}`);
        seturl("");
        setshorturl("");
        fetchLinks(); // Refresh link list
      }
    } catch (error) {
      console.error("Generate Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[83vh] flex flex-col items-center justify-start bg-purple-50 px-4 py-10">
      <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-purple-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-700 text-center mb-4">
          Generate Short Link URL
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-6">
          Paste your long URL and customize your short link in seconds.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={url}
            placeholder="🔗 Enter your long URL here"
            className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm sm:text-base"
            onChange={(e) => seturl(e.target.value)}
          />
          <input
            type="text"
            value={shorturl}
            placeholder="✂️ Enter your custom short URL"
            className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm sm:text-base"
            onChange={(e) => setshorturl(e.target.value)}
          />
          <button
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md disabled:opacity-50 text-sm sm:text-base"
            onClick={generate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {generated && (
          <div className="mt-6 text-center text-green-700 font-semibold text-sm sm:text-base break-words">
            ✅ Your short link:{" "}
            <a
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-600 break-words"
            >
              {generated}
            </a>
          </div>
        )}
      </div>

      {/* Link History Section */}
      {links.length > 0 && (
        <div className="mt-10 w-full max-w-xl bg-white p-6 rounded-xl shadow-lg border border-purple-200">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
            📜 Generated Links
          </h2>
          <ul className="space-y-3 text-sm sm:text-base break-words">
            {links.map((link, index) => (
              <li key={index} className="text-purple-700 hover:underline">
                🔗{" "}
                <a
                  href={`${process.env.NEXT_PUBLIC_API_URL}/${link.shorturl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {process.env.NEXT_PUBLIC_API_URL}/{link.shorturl}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Generate;

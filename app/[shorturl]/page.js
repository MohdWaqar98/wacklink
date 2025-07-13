import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function RedirectPage({ params }) {
  const awaitedParams = await params;
  const shorturl = awaitedParams?.shorturl;

  if (!shorturl) {
    return (
      <div className="min-h-[83vh] sm:min-h-screen flex items-center justify-center px-4 bg-red-100">
        <p className="text-red-600 text-center font-semibold text-lg sm:text-xl">
          ❗ Invalid short URL
        </p>
      </div>
    );
  }

  const client = await clientPromise;
  const db = client.db("wacklinks");
  const collection = db.collection("urls");

  const found = await collection.findOne({ shorturl });

  if (found) {
    redirect(found.url);
  } else {
    return (
      <div className="min-h-[83vh] sm:min-h-screen flex items-center justify-center px-4 bg-red-100">
        <p className="text-red-600 text-center font-semibold text-lg sm:text-xl">
          ❌ Short URL not found!
        </p>
      </div>
    );
  }
}

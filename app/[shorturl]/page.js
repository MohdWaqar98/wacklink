import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function RedirectPage({ params }) {
  const awaitedParams = await params;
  const shorturl = awaitedParams?.shorturl;

  if (!shorturl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-600 font-semibold text-xl">
        ❗ Invalid short URL
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
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-600 font-semibold text-xl">
        ❌ Short URL not found!
      </div>
    );
  }
}

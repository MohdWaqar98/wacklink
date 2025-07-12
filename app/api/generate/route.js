// ✅ Updated route.js (GET + POST in same file)
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("wacklinks");
  const collection = db.collection("urls");

  if (!body.url || !body.shorturl) {
    return Response.json(
      { message: "URL and short URL are required" },
      { status: 400 }
    );
  }

  const existingUrl = await collection.findOne({ shorturl: body.shorturl });
  if (existingUrl) {
    return Response.json(
      { message: "Short URL already exists" },
      { status: 400 }
    );
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
    createdAt: new Date(),
  });

  return Response.json({
    message: "URL generated successfully",
    data: {
      id: result.insertedId,
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    },
  });
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("wacklinks");
    const collection = db.collection("urls");
    const links = await collection.find().sort({ createdAt: -1 }).toArray();

    return Response.json({ links }, { status: 200 });
  } catch (error) {
    console.error("Error fetching links:", error);
    return Response.json({ message: "Failed to fetch links" }, { status: 500 });
  }
}

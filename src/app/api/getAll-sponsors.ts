import { db } from "@/lib/db";

export async function GET() {
  try {
    const sponsors = await db.sponsor.findMany({
      include: { donations: true },
    });
    return new Response(JSON.stringify(sponsors), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Could not fetch sponsors", { status: 500 });
  }
}

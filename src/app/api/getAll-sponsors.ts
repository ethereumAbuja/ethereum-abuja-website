import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { name, twitter } = await req.json();

    const sponsorExist = await db.sponsor.findUnique({
      //   where: { OR: [{ name }, { twitter }] },
      where: { OR: [name, twitter] },
    });
  } catch (error) {
    error;

    return new Response(
      "Could not subscribe to subreddit at this time. Please try later",
      { status: 500 },
    );
  }
}

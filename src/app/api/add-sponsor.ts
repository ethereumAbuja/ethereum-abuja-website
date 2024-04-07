import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, twitter, amount } = await req.json();

    const sponsorNameExist = await db.sponsor.findUnique({
      where: { name },
    });
    const sponsorTwitterExist = await db.sponsor.findUnique({
      where: { twitter },
    });

    if (!sponsorNameExist || !sponsorTwitterExist) {
      return new Response("Sponsor Exist Already, He is a real Hero", {
        status: 400,
      });
    }

    const newSponsor = await db.sponsor.create({
      data: {
        name,
        twitter,
      },
    });

    await db.donation.create({
      data: {
        amount,
        sponsorId: newSponsor.id,
      },
    });

    return new Response("Sponsor added successfully", { status: 201 });
  } catch (error) {
    error;

    return new Response(
      "Could not create sponsor and donation. Please try again later",
      { status: 500 },
    );
  }
}

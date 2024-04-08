import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    console.log(req.body);
    const { name, twitter, amount } = await req.json();

    const sponsorTwitterExist = await db.sponsor.findUnique({
      where: { twitter },
    });

    if (sponsorTwitterExist) {
      return new Response("Sponsor Exist Already, He is a real Hero", {
        status: 400,
      });
    }
    const newSponsor = await db.sponsor.create({
      data: {
        name,
        twitter,
        amount,
      },
    });

    const newDonation = await db.donation.create({
      data: {
        amount,
        sponsorId: newSponsor.id,
      },
    });
    // Update sponsor's donations array (alternative approach)
    await db.sponsor.update({
      where: { id: newSponsor.id },
      data: {
        donations: { connect: { id: newDonation.id } },
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

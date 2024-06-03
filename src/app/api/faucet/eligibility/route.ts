export async function GET(req: Request) {
  try {
    // const donations = await db.donation.findMany({
    //   include: { sponsor: true },
    // });
    // return new Response(JSON.stringify(donations), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Could not fetch Dontions", { status: 500 });
  }
}

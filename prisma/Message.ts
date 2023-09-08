import { prisma } from "../app/db";

export async function GetMessage() {
  try {
    if (prisma) {
      const data = await prisma.guestbook.findMany({
        take: 50,
        orderBy: {
          created_at: "desc",
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

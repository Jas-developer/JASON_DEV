import { prisma } from "../app/db";

export async function GetMessage() {
  const data = await prisma.guestbook.findMany({
    take: 50,
    orderBy: {
      created_at: "desc",
    },
  });

  return data;
}

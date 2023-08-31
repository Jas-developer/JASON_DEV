import Contact from "../components/Contact";
import Form from "../components/Form";
import { prisma } from "../db";

// fetch the message data
async function GetMessage() {
  const data = await prisma.guestbook.findMany({
    take: 50,
    orderBy: {
      created_at: "desc",
    },
  });

  return data;
}

export const revalidate = 60;
export default async function Guestbook() {
  const data = await GetMessage();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="w-full grid lg:grid-cols-2">
          <div>
            <Form />
            <div className="flex flex-col space-y-2">
              {data.map((entry) => (
                <div key={entry.id} className="w-full text-sm break-words">
                  <span className="text-md text-gray-800 font-semibold dark:text-gray-100">
                    {entry.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <br className="lg:hidden" />
          <hr className="lg:hidden" />
          <div className="lg:px-4 lg:mt-0 mt-2">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

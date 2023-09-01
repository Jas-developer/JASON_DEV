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
            <>
              <h1 className="text-5xl text-gray-700 mb-4  dark:text-gray-100 font-bold">
                CONTACT
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 relative gap-2 ">
                <div className="hover:-translate-y-3 py-6 px-8 rounded-md transform transition duration-300 ease-in-out border bg-gray-50 border-b dark:bg-black  border-gray-100 dark:border-hidden  flex items-center flex-col ">
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="8em"
                      width="8em"
                      className="text-blue-400"
                    >
                      <path d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 00-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 00335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 00112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z" />
                    </svg>
                  </div>
                  <a
                    href="https://join.skype.com/invite/qz8DboDia4J9"
                    className="text-lg font-bold text-teal-700 underline"
                  >
                    Click the link
                  </a>
                </div>
                <div className="hover:-translate-y-3 py-6 px-8 rounded-md transform transition duration-300 ease-in-out border bg-gray-50 border-b dark:bg-black  border-gray-100 dark:border-hidden  flex items-center flex-col ">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="8em"
                      width="8em"
                      className="text-red-400"
                    >
                      <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
                    </svg>
                  </div>
                  <span className="text-md font-bold text-gray-700 dark:text-gray-100">
                    devop.jas@gmail.com
                  </span>
                </div>
                <div className="hover:-translate-y-3 py-6 px-8 rounded-md transform transition duration-300 ease-in-out border bg-gray-50 border-b dark:bg-black  border-gray-100 dark:border-hidden  flex items-center flex-col ">
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="8em"
                      width="8em"
                      className="text-green-400"
                    >
                      <path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM661 736h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.6-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H363a8 8 0 01-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 01-29.1-75.5c0-61.9 49.9-112 111.4-112 61.5 0 111.4 50.1 111.4 112 0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zM512 474c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52c28.5 0 51.7-23.3 51.7-52s-23.2-52-51.7-52z" />
                    </svg>
                  </div>
                  <span className="text-md font-bold text-gray-700 dark:text-gray-100">
                    +639705038067
                  </span>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

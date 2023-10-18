import Form from "../components/Form";
import { GetMessage } from "@/prisma/Message";
import "../styles/GlassBg.css";

// fetch the message data

export default async function Guestbook() {
  if (GetMessage() === undefined) {
    console.log("Messages is undefined");
  }
  const data = await GetMessage();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="w-full grid lg:grid-cols-2">
          <div className="">
            <Form />
            <div className="flex flex-col space-y-2">
              {data?.map((entry) => (
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
          <div className="lg:px-4 lg:mt-0 mt-2 ">
            <>
              <h1 className="text-5xl text-black mb-4  dark:text-gray-100 font-bold">
                CONTACT
              </h1>
              <div className=" flex flex-col gap-[1rem]">
                <div className=" glass-effect flex flex-row gap-2 justify-start p-2 items-center border-[2px] border-solid rounded-[20%] border-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-[3rem] h-[3rem] text-green-400 dark:text-teal-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  <span className="font-semibold text-[1rem] text-gray-700 dark:text-gray-100">
                    +639705038067
                  </span>
                </div>
                <div className="glass-effect flex flex-row gap-2 p-2 justify-start items-center border-[2px] border-solid rounded-[20%] border-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-[3rem] h-[3rem] text-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                    />
                  </svg>

                  <span className="font-semibold text-[1rem] text-gray-700 dark:text-gray-100">
                    DAVAO CITY
                  </span>
                </div>
                <div className=" rounded-[20%] glass-effect flex flex-row gap-2 p-2 justify-start items-center border-[2px] border-solid  border-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[3rem] h-[3rem] text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="font-semibold text-[1rem] text-gray-700  dark:text-gray-100">
                    devop.jas@gmail.com
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

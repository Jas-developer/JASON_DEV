"use client";

import { useRef } from "react";
import { postEntry } from "../action";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <h1 className="text-5xl text-black mb-4  dark:text-gray-100 font-bold">
        NOTE
      </h1>
      <form
        action={async (formData) => {
          await postEntry(formData);
          formRef.current?.reset();
        }}
        ref={formRef}
        className="relative flex items-center text-sm mb-5 justify-center"
      >
        <input
          type="text"
          placeholder="Leave me a note..."
          name="entry"
          required
          className="pl-4 pr-32 py-2 dark:border-none  focus:border-blue-500 block w-full border-neutral-300 rounded-l-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
        <button
          type="submit"
          className="group relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-r-md px-4 py-2 active:scale-95 active:shadow-inner"
        >
          <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
          <div className="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className=""
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="#fff"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
          <span className="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
            Send
          </span>
        </button>
      </form>
    </>
  );
}

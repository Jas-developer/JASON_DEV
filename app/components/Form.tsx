"use client";

import { useRef } from "react";
import { postEntry } from "../action";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <h1 className="text-5xl text-gray-700 mb-4  dark:text-gray-100 font-bold">
        NOTE
      </h1>
      <form
        action={async (formData) => {
          await postEntry(formData);
          formRef.current?.reset();
        }}
        ref={formRef}
        className="relative flex items-center text-sm mb-5"
      >
        <input
          type="text"
          placeholder="Leave me a note..."
          name="entry"
          required
          className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
        <button
          type="submit"
          className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500 text-gray-100 dark:text-neutral-100 rounded w-16"
        >
          Send
        </button>
      </form>
    </>
  );
}

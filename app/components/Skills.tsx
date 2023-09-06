import { client } from "../lib/sanity";

interface Data {
  specialize: string;
  _id: string;
}
async function Skills() {
  const query = `*[_type == "skills"] | order(specialize asc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function FrontEndSkills() {
  const data: Data[] = await Skills();

  return (
    <>
      <ul className="prose prose-md mt-6">
        {data.map((skill) => (
          <li
            key={skill._id}
            className="flex  items-center flex-row gap-2 text-gray-600 dark:text-gray-300 md:text-lg text-md font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <span className="line-clamp-1"> {skill.specialize}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

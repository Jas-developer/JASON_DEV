import { client } from "../lib/sanity";

interface Data {
  language: string;
  _id: string;
}

async function getLanguage() {
  const query = `*[_type == "language"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Language() {
  const data: Data[] = await getLanguage();

  return (
    <>
      {data.map((item) => (
        <ul
          key={item._id}
          className="font-semibold text-md text-gray-600 dark:text-gray-200 mt-2 flex flex-col gap-2"
        >
          <li>{item.language}</li>
        </ul>
      ))}
    </>
  );
}

import { client } from "../lib/sanity";

interface Data {
  tools: string;
  _id: string;
}
async function getTools() {
  const query = `*[_type ==  "tools"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function Tools() {
  const data: Data[] = await getTools();

  return (
    <>
      <ul className="font-semibold text-md  flex-col text-gray-600 dark:text-gray-200 mt-2 flex gap-2">
        {data.map((item) => (
          <li key={item._id}>{item.tools}</li>
        ))}
      </ul>
    </>
  );
}

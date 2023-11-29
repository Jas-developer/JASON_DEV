import { client } from "../lib/sanity";
import Image from "next/image";
import "../styles/GlassBg.css";

interface Data {
  title: string;
  overview: string;
  _id: string;
  image: string;
}

async function getProject() {
  const query = `*[_type == "project" ] {
    title,
    overview,
    _id,
    "image": image.asset->url
}`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export default async function AllProjects() {
  const data: Data[] = await getProject();
  return (
    <div className="w-full flex-row gap-2 flex p-2 bg-[#04457f] relative rounded-md">
      <div className="flex flex-col gap-2">
        <div className="w-[200px] h-[200px] flex justify-center items-center bg-gray-900 rounded-md">
          <p className="text-gray-100">FLEX - 1</p>
        </div>
        <div className="w-[200px] h-[200px] flex justify-center items-center bg-gray-900 rounded-md">
          <p className="text-gray-100">FLEX - 2</p>
        </div>
        <div className="w-[200px] h-[200px] flex justify-center items-center bg-gray-900 rounded-md">
          <p className="text-gray-100">FLEX - 3</p>
        </div>
      </div>
      <div className="flex w-[100%] gap-4 flex-col">
        <div className=" bg-orange-400 h-[400px] flex justify-center items-center rounded-lg  w-full">
          <p>IMAGE REFERENCE</p>
        </div>
        <div className="bg-teal-400 h-[200px] w-full rounded-md flex justify-center items-center">
          <p>Project description</p>
        </div>
      </div>
    </div>
  );
}

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
  const query = `*[_type == "project"] {
        title,
        overview,
        _id,
        "image": image.asset->url
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function AllProjects() {
  const data: Data[] = await getProject();
  return (
    <div className="">
      {data.map((project) => (
        <div key={project._id} className="flex flex-col glass-effect  mt-5 ">
          <span className="text-blue-700 font-bold lg:text-2xl text-center ">
            {project.title}
          </span>
          <div className="flex glass-effect items-center justify-center  relative overflow-hidden">
            <Image
              src={project.image}
              width={600}
              height={400}
              alt="learning management system"
              className="transform transition-transform hover:scale-110 duration-700  object-cover ease-in-out cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const C_SHARP: string =
  "C# - Well-versed in C# programming for versatile application development across platforms";
const TYPESCRIPT: string =
  " Fluent in TypeScript for writing scalable, type-safe code, ensuring enhanced reliability.";
const REACT: string =
  "Expertise in React for crafting dynamic and interactive web interfaces.";
const TAILWIND: string =
  "TAILWIND - Proficient in Tailwind CSS for streamlined and utility-based styling, enhancing UI/UX design.";
const EXPRESS_JS: string =
  "EXPRESS JS - Experienced in developing server-side applications using Express.js for efficient routing and middleware.";
const MONGOOSE: string =
  "MONGOOSE - Skilled in using Mongoose for structured data modeling and interaction with MongoDB.";
const MONGO_DB =
  "MONGODB - Proficient in designing and managing MongoDB databases for web application data storage.";

const PARAGRAPHS = [
  EXPRESS_JS,
  C_SHARP,
  TYPESCRIPT,
  REACT,
  TAILWIND,
  MONGOOSE,
  MONGO_DB,
];

export default function CoreSkills() {
  return (
    <div className="flex flex-col">
      {PARAGRAPHS.map((skill: string) => (
        <div key={skill} className="flex flex-col font-sans ">
          <p className="mt-2">{skill}</p>
        </div>
      ))}
    </div>
  );
}

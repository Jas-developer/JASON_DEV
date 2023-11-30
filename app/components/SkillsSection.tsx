import { iconComponents } from "@/assets/SkillIcons";

export default function SkillSection() {
  return (
    <section className="">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {iconComponents.map((Icon, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-teal-400 border"
          >
            <Icon height="60px" width="50px" />
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import JASON from "../../assets/images/JASON.jpg";
import IMAGE1 from "../../assets/images/ME (2).jpg";
import IMAGE2 from "../../assets/images/ME.jpg";

export default function BlogPosts() {
  return (
    <div className="flex flex-col gap-10 mt-4 mb-4">
      <hr />
      <span className="font-semibold text-4xl font-serif text-green-500">
        ABOUT ME
      </span>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex object-cover flex-col gap-4 justify-center ">
          <Image
            src={JASON}
            width={550}
            height={350}
            alt="Jason Evaristo"
            className="rounded"
          />
          <hr />
          <Image
            src={IMAGE1}
            width={550}
            height={350}
            alt="Jason Evaristo"
            className="rounded"
          />
        </div>
        <div className="flex gap-10 text-lg  md:text-xl flex-col font-medium text-gray-900 dark:text-gray-100 font-sans">
          <p>
            Hi, I'm Jason, a backend software developer passionate about
            crafting robust solutions. My expertise lies in backend development,
            where I thrive on creating efficient and scalable applications.I am
            also capable of touch the frontend like integrating api's, Creating
            a responsive design etc.
          </p>
          <p>
            While my main focus is on backend development, I also harbor a
            strong interest in blockchain technology. I'm captivated by its
            potential and continuously explore its applications in different
            industries.
          </p>
          <p>
            I enjoy delving into the intricacies of server-side technologies and
            building systems that power seamless user experiences. Solving
            complex challenges and optimizing functionality excite me in the
            world of software development.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 font-sans text-gray-700 dark:text-gray-100">
        <span className="text-3xl font-semibold">ABOUT THIS PORTFOLIO</span>
        <p className="text-xl font-medium font-sans">
          I built this portfolio with the aim of showcasing my expertise in
          backend development while exploring new technologies. Utilizing
          Next.js, I sought to delve into its framework, understanding its basic
          functionalities, and leveraging its capabilities as a form of
          learning.
        </p>
      </div>
    </div>
  );
}

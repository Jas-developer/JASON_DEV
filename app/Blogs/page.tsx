export default function BlogPosts() {
  return (
    <div className="flex flex-col gap-10">
      <span className="font-semibold text-4xl font-serif">LATEST BLOGS</span>
      <div className="flex flex-col justify-start">
        <div className="flex flex-col gap-5">
          <span className="text-teal-500 font-medium text-2xl">
            C#(See Sharp) Methods
          </span>
          <p className="md:prose-xl prose-invert w-full">
            In C#, methods are fundamental units of code that encapsulate
            specific functionalities within a program. Each method comprises a
            method signature, which includes the method's name, return type, and
            parameters, and a method body that contains the instructions to be
            executed when the method is invoked. Methods enable code reuse,
            modularization, and maintainability in C# applications, contributing
            to structured and efficient software development practices.
          </p>
        </div>
      </div>
    </div>
  );
}

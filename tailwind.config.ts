module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  extend: {
    // Add your custom styles here
    // For example, let's add the .glass-effect class
    boxShadow: {
      glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    },
    backdropBlur: {
      "10": "10px",
    },
    backgroundColor: {
      glass:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
    },
  },
};

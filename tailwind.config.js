/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        appPurple: "#6C63FF",
      },
      ringColor: {
        appPurple: "#6C63FF",
      },
      backgroundColor: {
        appPurple: "#6C63FF",
        darkAppPurple: "#5850DD",
      },
      textColor: {
        appPurple: "#6C63FF",
      },
    },
  },
  plugins: [],
};

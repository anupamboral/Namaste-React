/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        starry: "url('src/imgs/background2.png')",
      },
    },
  },
  plugins: [],
};

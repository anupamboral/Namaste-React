/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "body-background": "url('src/imgs/background_image.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Public_sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary
        Dark_Blue: "hsl(233, 26%, 24%)",
        Lime_Green: "hsl(136, 65%, 51%)",
        Bright_Cyan: " hsl(192, 70%, 51%)",

        //  Neutral
        Grayish_Blue: "hsl(233, 8%, 62%)",
        Light_Grayish_Blue: "hsl(220, 16%, 96%)",
        Very_Light_Gray: " hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

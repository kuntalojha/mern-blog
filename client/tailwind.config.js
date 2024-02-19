// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This two for vite with tailwindcss
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // This one from flowbite-react
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // This one for flowbite-react 
    require("flowbite/plugin"),
  ],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
// 	  "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite-react/**/*.js"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

/** @type {import('tailwindcss').Config} */
export const purge = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  //Because we made a dynamic class with the label we need to add those clases
  // to the safe list so the purge does not remove that
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`)
  ],
};
export const darkMode = false;
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Open Sans"]
    },
    gridTemplateColumns: {
      "1/5": "1fr 5fr"
    }
  },
};
export const variants = {
  extend: {},
};
export const plugins = [require("@tailwindcss/forms")];


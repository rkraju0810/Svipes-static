/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
        'pro':'1023px',
        'lg': '1025px',
        'pxl':'1300px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customPink: '#FF00F5',
        green: '#1AFF5A',
        yel: '#E5FE40 ',
        red: '#FF0000',
        pu: '#7B08FD',
        puu:'#6E07E3',
        ro:'#EA49EA',
        he:'#F26622',
        pc:'#FD0A62',
        pin:'#FF004D',
        bl:'#F34EEE',
        
      },
    },
  },
  plugins: [],
};

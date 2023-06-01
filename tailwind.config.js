/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      xs: "389.9px",
      // => @media (min-width: 390px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'myBg': "url('/img/bg.png')",
        'linkedin': "url('/img/linkedin.svg')"
      },
      fontFamily : {
        BB: ["Ticking Timebomb BB" , "sans-serif"],
        Mate: ["Mate SC Regular" , "sans-serif"]
      }
    },
  },
  plugins: [],
};

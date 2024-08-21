/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "767px",
    },
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightPink: "hsl(275, 100%, 97%)",
        GrayishPurple: "hsl(292, 16%, 49%)",
        DarkPurple: "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        WorkSansBold: "WorkSans Bold",
        WorkSansRegular: "WorkSans Regular",
        WorkSansSemiBold: "WorkSans SemiBold",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f3f3f3",
        surface: "#ffffff",
        ink: "#1c1c1c",
        muted: "#6f6f6f",
        line: "#dedede",
        night: "#232323",
        "night-line": "#3a3a3a",
        live: "#22c55e",
      },
      fontFamily: {
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        pill: "0 1px 2px rgba(0,0,0,0.06), 0 4px 14px rgba(0,0,0,0.06)",
        card: "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

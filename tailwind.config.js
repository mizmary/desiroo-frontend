/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"]
      },
      fontSize: {
        h1: ["48px", { fontFamily: "Comfortaa", fontWeight: "700", lineHeight: "120%" }],
        h2: ["32px", { fontFamily: "Comfortaa", fontWeight: "600", lineHeight: "130%" }],
        h3: ["24px", { fontFamily: "Comfortaa", fontWeight: "500", lineHeight: "150%" }],
        h4: ["20px", { fontFamily: "Comfortaa", fontWeight: "500", lineHeight: "120%" }],

        bodyM: [
          "16px",
          { fontFamily: "Manrope", fontWeight: "400", lineHeight: "150%", letterSpacing: "2%" }
        ],
        bodyS: [
          "14px",
          { fontFamily: "Manrope", fontWeight: "400", lineHeight: "140%", letterSpacing: "2%" }
        ],

        buttonL: ["16px", { fontFamily: "Manrope", fontWeight: "600", lineHeight: "125%" }],
        buttonM: [
          "14px",
          { fontFamily: "Manrope", fontWeight: "600", lineHeight: "115%", letterSpacing: "5%" }
        ],
        buttonS: [
          "12px",
          { fontFamily: "Manrope", fontWeight: "600", lineHeight: "115%", letterSpacing: "5%" }
        ],
        inputM: [
          "16px",
          { fontFamily: "Manrope", fontWeight: "400", lineHeight: "125%", letterSpacing: "2%" }
        ],
        inputL: [
          "18px",
          { fontFamily: "Manrope", fontWeight: "400", lineHeight: "135%", letterSpacing: "2%" }
        ],
        helper: [
          "12px",
          { fontFamily: "Manrope", fontWeight: "300", lineHeight: "150%", letterSpacing: "3%" }
        ],
        tagS: ["12px", { fontFamily: "Manrope", fontWeight: "500", lineHeight: "135%" }]
      },
      backgroundImage: {
        gradient: "linear-gradient(122.11deg, #FFA166 8.98%, #7853DF 70.92%)"
      },
      colors: {
        white: "#FDFCFF",
        purple: {
          DEFAULT: "#7853DF", //400
          50: "#EEE9FB",
          100: "#DDD4F7",
          300: "#9A7EE7",
          600: "#4520AC",
          950: "#090416"
        },
        peach: {
          DEFAULT: "#FF924F", //500
          50: "#FFEFE5",
          100: "#FFE0CC",
          200: "#FFC099",
          300: "#FFA166",
          400: "#FF8133"
        },
        grey: {
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333"
        },
        state: {
          danger: "#EB4747"
        }
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px"
      },
      borderRadius: {
        none: "0",
        sm: "6px",
        DEFAULT: "8px",
        lg: "12px",
        full: "9999px"
      }
    }
  },
  plugins: []
}

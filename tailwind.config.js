/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'bgbody': '#282a37',
        'headerBG':'#2f313c',
        'sectionBG': '#40424A',
        'hoverC': "#453B75",
        'effect':'#3c1ed2',
        'facebook': '#1877f2',
        "linkedin": "#0a66c2",
        'github': "#4078c0",
        
      }
    },
  },
  plugins: [],
}


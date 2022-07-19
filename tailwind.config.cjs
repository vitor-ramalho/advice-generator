module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GrayshBlue: 'hsl(217, 19%, 38%)',
        DarkGrayshBlue: 'hsl(217, 19%, 24%)',
        LightCyan: 'hsl(193, 38%, 86%)',
        NeonGreen: 'hsl(150, 100%, 66%)'
      },
      letterSpacing: {
        large: '.3em'
      }
    },
  },
  plugins: [],
}
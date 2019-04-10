import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
// Wordpress2016.baseFontSize = '18px'
// Wordpress2016.baseLineHeight = 1.666

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//     "h1,h2,h3,h4,h5,h6": {
//       fontFamily: `"Fira Sans", sans-serif`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  headerFontFamily: ["Fira Sans", "Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Montserrat", "serif"],
  scaleRatio: 5 / 2,
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

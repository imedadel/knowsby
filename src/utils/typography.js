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
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Fira Sans", "Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Merriweather", "serif"],
  scaleRatio: 3,
  bodyColor: "#22292f",
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

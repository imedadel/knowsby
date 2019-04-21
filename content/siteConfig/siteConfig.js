const tailwind = require('../../tailwind')

module.exports = {
    pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/help your pathPrefix should be "/help"

    siteTitle: "Knowsby - GatsbyJS Knowdledge Base Starter", // Navigation and Site Title
    siteTitleAlt: "Knowsby", // Alternative Site title for SEO
    siteTitleShort: "Knowsby", // short_name for manifest
    siteDescription: "A GatsbyJS starter to quickly set up an optimized knowledge base for your business",
    siteKeywords: ["help", "react", "gatsby", "knowledge", "starter"],
    siteUrl: "https://knowsby.imedadel.me", // Domain of your site. No trailing slash!
    
    siteAuthor: "Imed Adel",
    
    googleAnalyticsID: 'UA-47519312-5',

    // Navbar Links
    navbarLinks: [
        {
            label: "About",
            link: "https://imedadel.me",
        },
        {
            label: "Contact",
            link: "https://imedadel.me",
        },
        {
            label: "Buy",
            link: "https://pay.paddle.com/checkout/557180",
        },
    ],

    // Labels
    pageLabels: {
        topics: "🗄️ Topics",
        featured: "🎀 Featured",
        latest: "✨ Latest",
    },

    // Manifest colors
    themeColor: tailwind.colors.black,
    backgroundColor: tailwind.colors.white,

}
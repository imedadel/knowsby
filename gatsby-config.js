const siteConfig = require('./content/siteConfig/siteConfig')

module.exports = {
  siteMetadata: {
    title: siteConfig.siteTitleAlt,
    author: siteConfig.siteAuthor,
    description: siteConfig.siteDescription,
    siteUrl: siteConfig.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.googleAnalyticsID,
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.siteTitleAlt,
        short_name: siteConfig.siteTitleShort,
        start_url: siteConfig.pathPrefix,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

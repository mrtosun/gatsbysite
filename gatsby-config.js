/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Your Site Title',
    siteUrl: 'https://yoursite.com',
  },
    plugins: [     {
        resolve: "gatsby-remark-embed-video",
        options: {
            width: 800,
            ratio: 1.77, 
            height: 400, 
            related: false,
            noIframeBorder: true
        },
    },
    ],
}

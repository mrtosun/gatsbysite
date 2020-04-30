/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Mert Tosun`,
    siteUrl: `https://www.merttosundesign.com`,
    description: `Welcome to my site!`,
  },

  plugins: [`gatsby-plugin-react-helmet`,

  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `maven pro`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }



],
}

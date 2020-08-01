/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Anshul Tripathi`,
    description: `Personal Webpage.`,
    author: `Anshul Tripathi`,
  	subtitle: 'Hi, I\'m Anshul Tripathi 👋',
  	copyright: '© All rights reserved.'
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon:'src/media/phi.svg'
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
    `gatsby-transformer-remark`,
  ],
}

// no github pages o site não fica na raiz, o prefixo vem da action de deploy
const siteUrl = process.env.GATSBY_SITE_URL || "http://localhost:8000"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  trailingSlash: "always",
  siteMetadata: {
    title: `Dev Notes`,
    description: `Blog de estudos sobre programação e desenvolvimento de software.`,
    siteUrl: siteUrl,
    image: `/capa.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}

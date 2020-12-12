module.exports = {
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "ディスクリプションです",
    keywords: "gatsby, gatsbyjs bootstrap headless WordPress",
    image: "/static/gatsby.jpg",
    url: "https://www.gatsbyjs.com/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `practice.codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Bootstrap Tutorial`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

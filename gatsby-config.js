module.exports = {
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "ディスクリプションです",
    keywords:"gatsby, gatsbyjs bootstrap headless WordPress",
    image: "/static/gatsby.jpg",
    url:"https://www.gatsbyjs.com/"
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
  ],
}

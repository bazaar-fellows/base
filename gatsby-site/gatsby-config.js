module.exports = {
  siteMetadata: {
    title: `Bazaar`,
    description: `E-commerce made easy.`,
    author: `@bazaarfellows`,
    footer: `© 2019 Bazaar Fellows`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'Products',
        link: '/products/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     implementation: require("sass"),
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
  
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "Category",
        // This is the field under which it's accessible
        fieldName: "shop",
        // URL to query from
        url: "http://localhost:3000/graphql",
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

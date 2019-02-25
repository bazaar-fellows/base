import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import List from '../../components/list'


import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Products = (props) => {
    const products = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
        <SEO title="Products" />
        <h1>Products</h1>
        <Link to="/">Go back to the homepage</Link>
        <List items={products} />
    </Layout>
    )
}

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default Products;
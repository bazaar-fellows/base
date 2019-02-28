import React from "react"
import { graphql } from "gatsby"
import './products.scss';
import ProductQuery from '../../components/product-query'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import {client} from '../index';

import { Provider } from "react-redux";
<<<<<<< HEAD
=======
// import createStore from "../../store/index.js"
// export const store = createStore();

>>>>>>> 2e8363decb854cdb6ea99f1ea3c877f7a0c73c0e
import {store} from "../index.js";


const Products = (props) => {
  return (
<<<<<<< HEAD
    <Provider store = {store}>

    <Layout>
      <SEO title="Products" />
      <h1>Products</h1>
      <ProductQuery/>

    </Layout>
    </Provider>
=======
    <ApolloProvider client={client}>
      <Provider store = {store}>

      <Layout>
        <SEO title="Products" />
        <h1>Products</h1>
        {/* <List items={products} /> */}
        {/* <Deck /> */}
        <ProductQuery/>

      </Layout>
      </Provider>
    </ApolloProvider>
>>>>>>> 2e8363decb854cdb6ea99f1ea3c877f7a0c73c0e
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
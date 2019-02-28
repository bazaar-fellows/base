import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import List from '../../components/list';
import Auth from '../../auth/auth';
import './products.scss';
import Deck from '../../components/Deck';
import ProductQuery from '../../components/product-query'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import {client} from '../index';

import { Provider } from "react-redux";
// import createStore from "../../store/index.js"
// export const store = createStore();

import {store} from "../index.js";


const Products = (props) => {
  // const products = props.data.allMarkdownRemark.edges;
  return (
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
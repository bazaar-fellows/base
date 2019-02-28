import React from "react"

import './carsoul.scss';
import './index.scss';

import Mutation from './apollo/client.js';
import DeleteMutation from './apollo/delete.js';
import {graphql} from 'gatsby';
import { Query } from 'react-apollo';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";


import { Link } from "gatsby"
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo";


import { Provider } from "react-redux";
import createStore from "../store/index.js"
export const store = createStore();


export const client = new ApolloClient({
  uri: "https://bazaarapi.herokuapp.com/graphql"
});

const IndexPage = () => (
  <>
  <ApolloProvider client={client}>

  <Mutation/>
  <DeleteMutation/>

  <Provider store = {store}>
  <Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3><Link to="/products">Shop Products</Link></h3>
    <div classNameName='carsoul'>

      <input type="checkbox" className="faux-ui-facia" />
      <div className="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
        <img classNameName='carsoulImg' src={img1} alt="Slide 3" />
      </div>


      <input type="checkbox" className="faux-ui-facia" />
      <div className="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
        <img classNameName='carsoulImg' src={img2} alt="Slide 2" />
      </div>

      <input type="checkbox" className="faux-ui-facia" />
      <div className="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
        <img classNameName='carsoulImg' src={img3} alt="Slide 1" />
      </div>

      <div className="counter" count="3"> / 3</div>
    </div>
  </Layout>
  </Provider>
  </ApolloProvider>
  </>
)

export default IndexPage

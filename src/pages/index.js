import React from "react"
import '../components/design/carsoul.scss';
import '../components/design/index.scss';

import Mutation from '../components/apollo/category-mutation.js';
import DeleteMutation from '../components/apollo/category-delete-mutation.js';

import Auth from "../auth/auth"

import { ApolloProvider } from 'react-apollo';

import ApolloClient from "apollo-boost";
import SubHeader from '../components/subHeader';
import Layout from "../components/layout"
import SEO from "../components/seo";
import '../components/design/dropdown.css';
import Background from "../components/background";
import { Provider } from "react-redux";
import createStore from "../store";

export const store = createStore();




export const client = new ApolloClient({
  uri: "https://bazaarapi.herokuapp.com/graphql"
});

const IndexPage = () => (
  <>

    <ApolloProvider client={client}>



      <Provider store={store}>
        <Layout>

          <Auth capibility="delete">
            <p> Add Category </p>
            <Mutation />
            <p> Delete Category</p>
            <DeleteMutation />
          </Auth>

          <SubHeader />
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className='carsoul'>

            <Background />

            <input type="checkbox" className="faux-ui-facia" />
            <div className="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
              <img className='carsoulImg' src='https://images.unsplash.com/photo-1492235276442-80d2360d7faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="Slide 3" />
            </div>


            <input type="checkbox" className="faux-ui-facia" />
            <div className="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
              <img className='carsoulImg' src='https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="Slide 2" />
            </div>

            <input type="checkbox" className="faux-ui-facia" />
            <div className="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
              <img className='carsoulImg' src='https://images.unsplash.com/photo-1455287278107-115faab3eafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="Slide 1" />
            </div>

            <div className="counter" count="3"> / 3</div>
          </div>
          <div>
            <h1>lkjhlkjhaslkjhlsdkaj</h1>
          </div>
        </Layout>
      </Provider>
    </ApolloProvider>
  </>
)

export default IndexPage

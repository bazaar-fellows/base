import React from "react"
import Auth from "../auth/auth";
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
import '../components/dropdown.css';
import { Provider } from "react-redux";
import {connect} from 'react-redux';
import * as actions from '../redux/actions.js';
import createStore from "../store/index.js";
export const store = createStore();


export const client = new ApolloClient({
  uri: "https://bazaarapi.herokuapp.com/graphql"
});

class IndexPage extends React.Component{

  render(){
    return(
      <ApolloProvider client={client}>
        <Provider store = {store}>
          <body className={this.props.colorTheme}>
           <Layout colorTheme={this.props.colorTheme}>

            <Mutation/>
            <DeleteMutation/>

          <Auth capibility="update">
            <div class="dropdown">
              <button class="dropbtn">Change Theme</button>
              <div class="dropdown-content">
                <button onClick={() => this.darkTheme('dark')}>Dark</button>
                <button onClick={() => this.lightTheme('light')}>Light</button>
                <button onClick={() => this.colorTheme('color')}>Colorful</button>
              </div>
            </div>
          </Auth>

          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h3 className={this.state.colorTheme}><Link to="/products">Shop Products</Link></h3>
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
        </body>
      </Provider>
    </ApolloProvider>
    )
  }
}


const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

const mapDispatchToProps = (dispatch, getState) => ({
  darkTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
  lightTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
  colorTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);

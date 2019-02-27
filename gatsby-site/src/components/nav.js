import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

//adding connect to the reduct store

import Auth from '../auth/auth';
import './nav.scss';
import './layout.scss';

import UpdateCategory from './update-category.js';


class Nav extends React.Component {

    render(){
      return (

      <>
        <nav>
          {/* {this.props.data.shop.getAllCategories.map( category => (
            <div key={category._id} 
            onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</div>
          ))} */}
        {/* {this.props.data.shop.getAllCategories.map(category=>(
            <div onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</div>
        ))} */}
        </nav>
        <UpdateCategory allProducts={this.props.data.shop.getAllProducts}
        allCategories={this.props.data.shop.getAllCategories}  
        />
      </>
    );
    }
  };
  

  export default (props) => (
    <StaticQuery
      query={graphql`
      query{
        shop{
          getAllCategories{
            name
            _id
          }
          getAllProducts{
          name
          description
          price
          qty
          _id
          category{
          name
          _id
        }
      } 
    }
  }   
`}
      render={data => <Nav data={data} />}
    />
  )




import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

//adding connect to the reduct store

import Auth from '../auth/auth';
import './nav.scss';
import './layout.scss';

import UpdateCategory from './update-category.js';


class Nav extends React.Component {
  constructor(props){
    super(props);
      this.state={
        categoryName: '',
        categoryId: '',
        productsRendered: false
    }
  }

  clickCategory = (name, id) => {

    
    this.setState({categoryName: name});
    this.setState({categoryId: id});
    console.log('STATE from nav', this.state)
   }

    render(){
      return (

      <>
        <nav>
          {this.props.data.shop.getAllCategories.map( category => (
            <div key={category._id} 
            onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</div>
          ))}
        {/* {this.props.data.shop.getAllCategories.map(category=>(
            <div onClick={()=>this.selectedCategory(category.name, category._id)}>{category.name}</div>
        ))} */}
        </nav>
        <UpdateCategory categoryName={this.state.categoryName} 
        categoryId={this.state.categoryId}/>
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
        }
      }     
      `}
      render={data => <Nav data={data} />}
    />
  )


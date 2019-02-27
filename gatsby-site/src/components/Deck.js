
import React, { Component } from 'react'
import {graphql, StaticQuery} from 'gatsby'
// import { connect } from "react-redux";
import { If, Then, Else } from './conditional';
import './starter-card.scss';
import './layout.scss';
import Card from './Card.js';
import './dropdown.css';
import './deck.scss';


class Deck extends Component {
    constructor(props){
        super(props);
          this.state={
            categoryName: '',
            categoryId: '',
            products: []
        }
      }
   
    
    clickCategory = (name, id) => {
        let newName = name;
        let newId = id;
        this.setState({categoryName: newName});
        this.setState({categoryId: newId});
        this.filterProducts(this.props.allProducts);
       }
    
    filterProducts = (products) => {
        // console.log('product category id', products[0].category._id, 'state id', this.state.categoryId);
        let filteredProducts = products.filter(product=>{
            return product.category._id === this.state.categoryId;
        });
        this.setState({products: filteredProducts});
    }

  render() {
    //   console.log('PROPS FROM RENDER!!!!!!!!!', this.props)
        console.log('PRODUCTS from updateCategory!!!!!', this.state.products)

    return (
        <>
        <div>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
          {this.props.allCategories.map(category=>(
              <a key={category._id} onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</a>
          ))}
          </div>
        </div>
        <div className="card-deck">
        <If condition={this.state.categoryId}>
            <Then>
                <section className = "deck">
                {this.state.products.map( product => (
                    <Card key={product._id} content={product} />
                ))}
                </section>
            </Then>
            <Else>
                <div className="imgContainer">
                  <img className="featuredImage" src="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80" />
                </div>
            </Else>

        </If>
        </div>

        </div>
      </>
    )
  }
}



export default Deck;

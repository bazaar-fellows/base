
import React, { Component } from 'react'
import { If, Then, Else } from './conditional';
import '../components/design/layout.scss';
import Card from './Card.js';
import '../components/design/dropdown.css';
import '../components/design/deck.scss';
import Auth from '../auth/auth.js';

import AddProductMutation from '../components/apollo/add-product.js'


class Deck extends Component {
    constructor(props){
        super(props);
          this.state={
            categoryName: false,
            categoryId: false,
            products: [],
            condition: false
        }
      }

    //bug fix
    clickCategory = (name, id) => {
    let filteredProducts = this.props.allProducts.filter(product=>{
        return product.category._id === id;
    });
    this.setState({products: filteredProducts,categoryId: id, categoryName: name, condition: true});
        }

  render() {

    return (
        <>
        <div>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
          {this.props.allCategories.map(category=>(
              <span key={category._id} onClick={()=> this.clickCategory(category.name, category._id)}>{category.name}</span>
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
                
                <Auth capibility="create">
                <section>
                    <AddProductMutation categoryId={this.state.categoryId}/>
                </section>
                </Auth>

          </Then>
            <Else condition={this.state.categoryId}>
                <div className="imgContainer">
                  <img alt='featured product' className="featuredImage" src="https://res.cloudinary.com/olive-atlas/image/upload/v1551387680/oliveandatlas_olive_and_atlas_handmade_dog_accessories_spring_summer_17-12.jpg" />
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

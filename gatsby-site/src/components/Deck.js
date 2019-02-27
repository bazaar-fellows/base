import React, { Component } from 'react'
import {graphql, StaticQuery} from 'gatsby'
// import { connect } from "react-redux";
import { If, Then, Else } from './conditional';
import './starter-card.scss';
import './layout.scss';
import Card from './Card.js';


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
        console.log('product category id', products[0].category._id, 'state id', this.state.categoryId);
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
        <div className="contentContainer">
        <div>
        {this.props.allCategories.map(category=>(
            <div key={category._id} onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</div>
        ))}
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
                <div>Featured Product Goes Here.</div>
            </Else>

        </If>
        </div>

        </div>
      </>
    )
  }
}


// export default (props) => (
//     <StaticQuery
//       query={graphql`
//       query{
//         shop{
//           getAllProducts{
//             name
//             _id
//             category{
//                 name
//               }
//           }
//         }
//       }     
//       `}
//       render={data => <UpdateCategory data={data} />}
//     />
//   )


export default Deck;






//   const mapStateToProps = state => ({
//     data: state.data
//   });
  
//   const mapDispatchToProps = (dispatch, getState) => ({
//     getCategory: (category, id) => dispatch(actions.getCategory(category, id)),
//   });
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(UpdateCategory);
  
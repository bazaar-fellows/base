import React, { Component } from 'react'
import {graphql, StaticQuery} from 'gatsby'
// import { connect } from "react-redux";

class UpdateCategory extends Component {
   
    
selectProduct(name, id){

    console.log('DATA FROM UPDATE', this.props.getAllProducts);
    console.log('CATEGORY NAME FROM UPDATE',this.props.categoryName);
    
    // this.props.getCategory(name, id);
}

  render() {
    return (
      <div>
        {this.props.data.shop.getAllProducts.map(product=>(
            // product.name = product.category.name
            <div onClick={()=>this.selectProduct(product.name, product._id)}>{product.name}</div>
        ))}
      </div>
    )
  }
}


export default (props) => (
    <StaticQuery
      query={graphql`
      query{
        shop{
          getAllProducts{
            name
            _id
            category{
                name
              }
          }
        }
      }     
      `}
      render={data => <UpdateCategory data={data} />}
    />
  )


// export default UpdateCategory;






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
  
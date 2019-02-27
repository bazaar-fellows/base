import React, { Component } from 'react'
import {graphql, StaticQuery} from 'gatsby'
// import { connect } from "react-redux";
import { If, Then, Else } from './conditional';
import './starter-card.scss';

class UpdateCategory extends Component {
    constructor(props){
        super(props);
          this.state={
            categoryName: null,
            categoryId: null,
        }
      }
   
    
clickCategory = (name, id) => {
        let newName = name;
        let newId = id;
        
        this.setState({categoryName: newName});
        this.setState({categoryId: newId});
        console.log('STATE from updateCategory!!!!!', this.state)
       }

  render() {
    //   console.log('PROPS FROM RENDER!!!!!!!!!', this.props)
    return (
        <>
        <div>
        {this.props.allCategories.map(category=>(
            <div onClick={()=>this.clickCategory(category.name, category._id)}>{category.name}</div>
        ))}
        </div>
        <If condition={this.state.categoryId}>
            <Then>
                {this.props.allProducts.map( product => (
                    <If condition={product.category._id === this.state.categoryId}>
                        <Then>
                        <div className = "starter-card">
                            <div>{product.name}</div>
                            <div>{product.description}</div> 
                            <div>{product.qty}</div> 
                            <div>{product.price}</div> 
                        </div>
                        </Then>
                    </If>
                ))}
            </Then>
            <Else>
                <div>Featured Product Goes Here.</div>
            </Else>

        </If>
     
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


export default UpdateCategory;






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
  
import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

//adding connect to the reduct store

import Auth from '../auth/auth';
import './nav.scss';
import './layout.scss';

import Deck from './Deck.js';


class ProductQuery extends React.Component {

    render(){
      console.log('stuff from nav', this.props.data);
      return (
      <>
        <Deck allProducts={this.props.data.shop.getAllProducts}
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
    render={data => <ProductQuery data={data} />}
    />
  )




// const Nav = () => (
//     <nav>
//         <ul>
//             <li>
//                 <Link to="/products/">SHOP ALL</Link>
//             </li>

//             <li>|</li>

//             <Auth capability="create">
//                 <li>
//                     <Link to="/addProduct/">ADD PRODUCT</Link>
//                 </li>
//             </Auth>
//         </ul>
//     </nav>
// )

import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
// import Auth from '../auth/auth';
import './nav.scss';
import './layout.scss';

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

const Nav = props => {
  // const store = props.data;
  // console.log('swapi', store);

  const clickedThing = (person) => {
    console.log(person.name);
  }

  return (
    <>
      <nav>
        <Link className="products" to='/products'>products</Link>
      </nav>
      <nav>
        {props.data.shop.getAllCategories.map((item, i) => (
          <div key={i} onClick={() => clickedThing(item.name)}>{item.name}</div>
        ))}
      </nav>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
     query{
       shop{
         getAllCategories{
           name
         }
       }
     }

     `}
    render={data => <Nav data={data} />}
  />
);
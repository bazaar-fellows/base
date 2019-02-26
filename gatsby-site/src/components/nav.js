import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

// export default ({ data }) => (
//     <div>
//       <h1>About {data.site.siteMetadata.title}</h1>
//       <p>We're a very cool website you should return to often.</p>
//     </div>
//   )


const Nav = props => {
    const swapi = props.data;
    console.log('swapi', swapi);
    return (
        <>
        {props.data.swapi.allPersons.map(person=>(
            <div>{person.name}</div>
        ))}
      <div> Hello from swapi component </div>
      </>
    );
  };
  
  export default props => (
    <StaticQuery
      query={graphql`
        query SwapiQuery {
            swapi{
                allPersons{
                name
                id
                films{
                    title 
                }
                }
            }
              
        }
      `}
      render={data => <Nav data={data} />}
    />
  );


// const Nav = (props) => {
//     const swapi = props.data
//     console.log('props from nav' , swapi);
//     // console.log(data)
//     return (
//         <nav>
//         <ul style={{
//             listStyleType: `none`,
//             color: `white`,
//             margin: `0`,
//             padding: `0`,
//             }}
//         >
//             <li style={{
//             paddingLeft: `10px`,
//             float: `left`,
//             textDecoration: `none`,
//             display: `block`,
//             }}
//             >   
//                 <Link to="/products/">Shop All</Link>
//             </li>
//         </ul>
//     </nav>
//     ); 
// }

// const Menu = props => {
//     const swapi = props.data;
//     console.log('swapi', swapi);
//     return (
//       <div> Hello from swapi component </div>
//     );
//   };

// export default Nav;
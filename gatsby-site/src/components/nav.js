import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Auth from '../auth/auth';
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
    const swapi = props.data;
    console.log('swapi', swapi);

    const clickedThing = (person) =>{
      console.log(person.name);
    }

    return (
        <>
        <nav>
        {props.data.swapi.allPersons.map(person=>(
            <div onClick={()=>clickedThing(person)}>{person.name}</div>
        ))}
        </nav>
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


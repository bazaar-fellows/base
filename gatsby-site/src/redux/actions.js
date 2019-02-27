// import {graphql} from 'gatsby';

// export const getCategory = (name, id) => dispatch =>{
//     query={graphql`
//     query{
//       shop{
//         getAllCategories{
//           name
//           _id
//         }
//       }
//     }    
         
//     `}
// }

// export const runGetCategory = (name, id) => {
//     console.log('payload from actions!!!', name, id)
//     return {
//       type: "GETCATEGORY",
//       payload: {name: name, id: id}
//     };
//   };



//   export const getSchema = (model, url) => dispatch => {
//     superagent.get(url).then(data => {
//       dispatch(runGetSchema({ model: model, schema: data.body }));
//     });
//   };
  
//   const runGetSchema = payload => {
//     return {
//       type: "SCHEMA",
//       payload: payload
//     };
//   };
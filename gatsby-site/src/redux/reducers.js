let initialState = {
    cart: []
  };

  export default (state = initialState, action) => {
    let { type, payload} = action;
  
    switch (type) {
      case "UPDATECART":

        return {...state, cart: [...state.cart, payload]};
        
    
      case "CLEARCART":
      console.log('inside clear cart');
        return {...state, cart: []};
      
      default:
        return state;
    }
  };
  
  
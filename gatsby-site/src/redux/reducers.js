let initialState = {
    cart: []
  };

  export default (state = initialState, action) => {
    let { type, payload} = action;
  
    switch (type) {
      case "UPDATECART":
        let newState = {...state, cart: [...state.cart, payload]};
        console.log('new state', newState);
        return newState;
  
      default:
        return state;
    }
  };
  
  
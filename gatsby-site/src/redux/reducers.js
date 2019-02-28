let initialState = {
    cart: [],
    colorTheme: 'light'
  };

  export default (state = initialState, action) => {
    let { type, payload} = action;
  
    switch (type) {
      case "UPDATECART":
        let newState = {...state, cart: [...state.cart, payload]};
        return newState;
      
      case "CHANGECOLORTHEME":
        return ({...state, colorTheme: payload.color})
  
      default:
        return state;
    }
  };
  
  
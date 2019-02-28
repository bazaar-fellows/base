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
        let newColorTheme = {...state, colorTheme: payload.color }
        console.log('new state with newColorTheme', newColorTheme);
        return newColorTheme;
  
      default:
        return state;
    }
  };
  
  
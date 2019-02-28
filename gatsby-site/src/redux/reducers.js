let initialState = {
    cart: [],
    colorTheme: 'light'
  };

  export default (state = initialState, action) => {
    let { type, payload} = action;
  
    switch (type) {
      case "UPDATECART":
        return {...state, cart: [...state.cart, payload]};
        
    
      case "CLEARCART":
      console.log('inside clear cart');
        return {...state, cart: []};
      
      
      case "CHANGECOLORTHEME":

        let newColorTheme = {...state, colorTheme: payload.color }
        console.log('new state with newColorTheme', newColorTheme);
        return newColorTheme;
  
      default:
        return state;
    }
  };
  
  
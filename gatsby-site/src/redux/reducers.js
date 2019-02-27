let initialState = {
    category: ''
  };

  export default (state = initialState, action) => {
    let { type, payload} = action;
  
    switch (type) {
      case "GETCATEGORY":
        console.log('payload from reucer !!!', payload);
        return {...state, category: payload.name};
  
      default:
        return state;
    }
  };
  
  
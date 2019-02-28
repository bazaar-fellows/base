

export const updateCart = (id, name, price, description) => {
    return {
      type: "UPDATECART",
      payload: {id: id, name: name, price: price, description: description}
    };
  };

export const changeColorTheme = (color) => {
  console.log('payload fromm actions ', color);
  return{
    type: "CHANGECOLORTHEME",
    payload: {color: color}
  }
}



export const clearCart = () => {
  console.log('inside clear cart action');
  return {
    type: "CLEARCART"
  }
}
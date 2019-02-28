

export const updateCart = (id, name, price, description) => {
    console.log('payload from actions!!!', id)
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




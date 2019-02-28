

export const updateCart = (id, name, price, description) => {
    return {
      type: "UPDATECART",
      payload: {id: id, name: name, price: price, description: description}
    };
  };



export const clearCart = () => {
  console.log('inside clear cart action');
  return {
    type: "CLEARCART"
  }
}
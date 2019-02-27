

export const updateCart = (id, name, price, description) => {
    console.log('payload from actions!!!', id)
    return {
      type: "UPDATECART",
      payload: {id: id, name: name, price: price, description: description}
    };
  };




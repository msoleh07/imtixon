const addToCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = [...state, action.data]);
    case "CLEAR_CART":
      return (state = []);
    case "REMOVE_FORM_CART":
      return (state = state.filter((pro) => pro.id !== action.payload));
    default: {
      return state;
    }
  }
};

export default addToCart;

export const addItemToCartUtil = (cartItems, newItem) => {
  const itemExists = cartItems.find((item) => item.id === newItem.id);

  if (itemExists) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else return [...cartItems, { ...newItem, quantity: 1 }];
};

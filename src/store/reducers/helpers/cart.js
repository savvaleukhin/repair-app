const removeService = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const addService = (arr, item, quantity) => {
  return [...arr, { ...item, quantity }];
};

const updateQuantity = (arr, index, quantity) => {
  const item = arr[index];

  return quantity > 0
    ? [...arr.slice(0, index), { ...item, quantity }, ...arr.slice(index + 1)]
    : removeService(arr, index);
};

const calculateTotalPrice = services => {
  return services.reduce((acc, i) => {
    return (acc += i.data.tarif * i.quantity);
  }, 0);
};

export const addToCart = (state, { service, quantity }) => {
  const indexInCart = state.services.findIndex(i => i.id === service.id);
  const updatedServices =
    indexInCart > -1
      ? updateQuantity(state.services, indexInCart, quantity)
      : quantity > 0
        ? addService(state.services, service, quantity)
        : [...state.services];

  const totalPrice = calculateTotalPrice(updatedServices);

  return {
    ...state,
    totalPrice,
    services: updatedServices,
  };
};

export const removeFromCart = (state, id) => {
  const indexInCart = state.services.findIndex(i => i.id === id);
  const updatedServices = removeService(state.services, indexInCart);
  const totalPrice = calculateTotalPrice(updatedServices);
  return {
    ...state,
    totalPrice,
    services: updatedServices,
  };
};

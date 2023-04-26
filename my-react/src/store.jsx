import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsInCart = createSlice({
  name: 'productInCartReducer',
  initialState: [],
  reducers: {
    addProuct: (state, action) => {
      state.push({
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        price: action.payload.price,
        title: action.payload.title,
      });
    },
    removeProduct: (state, action) => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

export const { addProuct, removeProduct } = productsInCart.actions;

export default configureStore({ reducer: productsInCart.reducer });

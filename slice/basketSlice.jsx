import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // ? these are action's
    addtoBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removefromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id,
      )
      let newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `can't remove product as (id: ${action.payload.id}) as it's or ound   `,
        )
      }
      state.items = newBasket
    },
  },
})

export const { addtoBasket, removefromBasket } = basketSlice.actions
export const selectItems = (state) => state.basket.items
export const selectotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)
export default basketSlice.reducer

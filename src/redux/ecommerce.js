// ** Redux Imports
import {
  createSlice
  // createAsyncThunk
} from '@reduxjs/toolkit'
import { toast } from "react-toastify"

export const appEcommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action?.payload
      const cart = JSON.parse(localStorage.getItem("cart"))
      if (!cart) {
        state.cart.push(product)
        localStorage.setItem("cart", JSON.stringify(state.cart))
      } else {
        state.cart = cart
        const found = state.cart.find((f) => f.item.id === product?.item?.id)
        if (found) {
          found.qty++
        } else {
          state.cart.push(product)
        }
        localStorage.setItem("cart", JSON.stringify(state.cart))
      }
      toast.success("Mahsulot savatga qo'shildi!")
    },

    updateProduct: (state, action) => {
      const { id, qty } = action?.payload
      const found = state.cart.find(f => { return f.item.id === id })
      found.qty = qty
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    removeFromCart: (state, action) => {
      const product = action?.payload
      const index = state.cart.findIndex(f => f.item.id === product?.id)
      state.cart.splice(index, 1)
      localStorage.setItem("cart", JSON.stringify(state.cart))
      toast.success("Mahsulot savatdan o'chirildi!")
    },

    deleteAllProducts: (state) => {
      localStorage.removeItem('cart')
      state.cart = []
      toast.success("Hamma mahsulotlar savatdan o'chirildi!")
    },

    checkLocalStorage: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart"))
      if (cart) {
        state.cart = cart
      }
    }
  }
})

export const { addToCart, checkLocalStorage, deleteAllProducts, removeFromCart, updateProduct } = appEcommerceSlice.actions

export default appEcommerceSlice.reducer

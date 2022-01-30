// ** Redux Imports
import {
  createSlice
  // createAsyncThunk
} from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const toastOption = { hideProgressBar: true, autoClose: 3000, position: toast.POSITION.BOTTOM_RIGHT }

// ** Axios Imports
// import axios from 'axios'

// export const fetchEvents = createAsyncThunk('appCalendar/fetchEvents', async calendars => {
//   const response = await axios.get('/apps/calendar/events', { calendars })
//   return response.data
// })


export const appEcommerceSlice = createSlice({
  name: 'appEcommerce',
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
      toast.success("Product successful added to cart!", toastOption)
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
      toast.success("Product successful removed from cart!", toastOption)
    },

    deleteAllProducts: (state) => {
      localStorage.removeItem('cart')
      state.cart = []
      toast.success("All product successful removed from cart!", toastOption)
    },

    checkLocalStorage: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart"))
      if (cart) {
        state.cart = cart
      }
    }
  }

  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchEvents.fulfilled, (state, action) => {
  //       state.events = action.payload
  //     })
  // }
})

export const { addToCart, checkLocalStorage, deleteAllProducts, removeFromCart, updateProduct } = appEcommerceSlice.actions

export default appEcommerceSlice.reducer

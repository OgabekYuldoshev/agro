// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const getProductDetails = createAsyncThunk('app/GetProductDetails', async (id) => {
    const response = await http.get(`/product/${id}`)
    return response.data
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDetails: {},
        isLoading: false
    },
    reducers: {
        // handleLogout: state => {
        //     state.userData = {}
        //     state.accessToken = ''
        //     state.isAuth = false
        //     localStorage.removeItem('userData')
        //     localStorage.removeItem('accessToken')
        //     toast.success("Siz muvaffaqiyatli profilingizdan chiqdingiz!")
        // },
        // handleAuthModal: state => {
        //     state.modal = !state.modal
        // }
    },
    extraReducers: {
        [getProductDetails.pending]: (state) => {
            state.isLoading = true
        },
        [getProductDetails.fulfilled]: (state, action) => {
            const { data } = action?.payload
            state.productDetails = data
            state.isLoading = false
        },
        [getProductDetails.rejected]: () => {
            state.isLoading = false
            toast.error("Serverda xatolik!")
        }
    }
})

export const { } = productSlice.actions

export default productSlice.reducer

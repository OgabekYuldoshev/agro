// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const getProductDetails = createAsyncThunk('app/GetProductDetails', async (id) => {
    const response = await http.get(`/product/${id}`)
    return response.data
})

export const searchProducts = createAsyncThunk('app/searchProducts', async (name) => {
    const response = await http.get(`/product-search`, {
        params: {
            name
        }
    })
    return response.data?.data
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDetails: {},
        review_products: [],
        searchProduct: [],
        isLoading: false,
        searchLoading: false
    },
    reducers: {
        handleClear: state => {
            state.searchProduct = []
        }
    },
    extraReducers: {
        [getProductDetails.pending]: (state) => {
            state.isLoading = true
        },
        [getProductDetails.fulfilled]: (state, action) => {
            const { data, review_products } = action?.payload
            state.productDetails = data
            state.review_products = review_products
            state.isLoading = false
        },
        [getProductDetails.rejected]: (state) => {
            state.isLoading = false
            toast.error("Serverda xatolik!")
        },
        [searchProducts.pending]: (state) => {
            state.searchLoading = true
        },
        [searchProducts.fulfilled]: (state, action) => {
            state.searchProduct = action.payload
            state.searchLoading = false
        },
        [searchProducts.rejected]: (state) => {
            state.searchLoading = false
            toast.error("Serverda xatolik!")
        }
    }
})

export const { handleClear } = productSlice.actions

export default productSlice.reducer

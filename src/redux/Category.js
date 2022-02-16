// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"


export const getCategoryProducts = createAsyncThunk('category/getCategoryProducts', async (data, { rejectWithValue }) => {
    try {
        const response = await http.get('/products', {
            params: data
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        products: [],
        isLoading: false,
        currentPage: 0,
        perPage: 25,
        total: 0
    },
    reducers: {
    },
    extraReducers: {
        [getCategoryProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            const { current_page, data, per_page, total } = action?.payload
            state.products = data
            state.currentPage = current_page
            state.perPage = per_page
            state.total = total
            state.isLoading = false
        },
        [getCategoryProducts.rejected]: () => {
            state.isLoading = false
            toast.error("Serverda xatolik!")
        }
    }
})

export const { } = categorySlice.actions

export default categorySlice.reducer

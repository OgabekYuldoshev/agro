// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"


export const getCategoryProducts = createAsyncThunk('category/getCategoryProducts', async (data, { rejectWithValue }) => {
    try {
        const response = await http.get('/products', {
            params: data
        })
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        products: [],
        category: {},
        partners: [],
        units: [],
        min: null,
        max: null,
        isLoading: false,
        currentPage: 0,
        perPage: 25,
        totalPages: 0,
        total: 0
    },
    reducers: {
    },
    extraReducers: {
        [getCategoryProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            const { products, categories, partnerFilter, unitsFilter, priceMax, priceMin } = action?.payload
            state.products = products?.data
            state.category = categories
            state.min = priceMin
            state.max = priceMax
            state.partners = partnerFilter
            state.units = unitsFilter
            state.currentPage = products?.current_page
            state.perPage = products?.per_page
            state.total = products?.total
            state.totalPages = products?.last_page
            state.isLoading = false
        },
        [getCategoryProducts.rejected]: (state) => {
            state.isLoading = false
            toast.error("Serverda xatolik!")
        }
    }
})

export const { } = categorySlice.actions

export default categorySlice.reducer

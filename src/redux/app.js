// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const home = createAsyncThunk('app/Home', async (data) => {
    const response = await http.get('/home-page', data)
    return response.data
})

export const getAddress = createAsyncThunk('app/getAddress', async (undefined, { rejectWithValue }) => {
    try {
        const response = await http.get('/auth/my-address')
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const addAddress = createAsyncThunk('app/addAddress', async (data, { rejectWithValue, dispatch }) => {
    try {
        const response = await http.post('/auth/my-address', data)
        dispatch(getAddress())
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteAddress = createAsyncThunk('app/deleteAddress', async (id, { rejectWithValue, dispatch }) => {
    try {
        const response = await http.delete(`/auth/my-address/${id}`)
        dispatch(getAddress())
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const apphSlice = createSlice({
    name: 'app',
    initialState: {
        newProducts: [],
        categories: [],
        recProducts: [],
        address: []
    },
    reducers: {
    },
    extraReducers: {
        [home.fulfilled]: (state, action) => {
            const { categories, new_comers, recommended } = action?.payload
            state.categories = categories
            state.newProducts = new_comers
            state.recProducts = recommended
        },
        [home.rejected]: () => {
            toast.error("Serverda xatolik!")
        },
        [getAddress.fulfilled]: (state, action) => {
            state.address = action.payload
        },
        [getAddress.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        [addAddress.fulfilled]: () => {
            toast.success("Yangi manzil yaratildi!")
        },
        [addAddress.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        [deleteAddress.fulfilled]: () => {
            toast.success("Manzil o'chirildi!")
        },
        [deleteAddress.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        }
    }
})

export const { } = apphSlice.actions

export default apphSlice.reducer

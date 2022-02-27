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

// Page
export const getPageContent = createAsyncThunk('app/getPageContent', async (params, { rejectWithValue }) => {
    try {
        const response = await http.get('/page-contents', {
            params
        })
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Message
export const sendMessage = createAsyncThunk('app/sendMessage', async (data, { rejectWithValue }) => {
    try {
        await http.post('/message-send', data)
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Order
export const createOrder = createAsyncThunk('app/createOrder', async (data, { rejectWithValue }) => {
    try {
        const response = await http.post('/auth/order-lists-create', data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Currency
export const getCurrency = createAsyncThunk('app/getCurrency', async (undefined, { rejectWithValue }) => {
    try {
        const response = await http.get('/currencies')
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
// Partners
export const getPartners = createAsyncThunk('app/getPartners', async (undefined, { rejectWithValue }) => {
    try {
        const response = await http.get('/partners')
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
        partners: [],
        address: [],
        sliders: [],
        pages: [],
        currency: [],
        contacts: [],
        allPartners: []
    },
    reducers: {
    },
    extraReducers: {

        [getCurrency.fulfilled]: (state, action) => {
            state.currency = action.payload
        },
        [getCurrency.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        [getAddress.fulfilled]: (state, action) => {
            state.address = action.payload
        },
        [getAddress.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        [getPartners.fulfilled]: (state, action) => {
            state.allPartners = action.payload
        },
        [getPartners.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        [home.fulfilled]: (state, action) => {
            const { categories, new_comers, recommended, partners, sliders, cantacts } = action?.payload
            state.categories = categories
            state.newProducts = new_comers
            state.recProducts = recommended
            state.contacts = cantacts
            state.partners = partners
            state.sliders = sliders
        },
        [home.rejected]: () => {
            toast.error("Serverda xatolik!")
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
        },
        // Page
        [getPageContent.fulfilled]: (state, action) => {
            state.pages = action.payload
        },
        [getPageContent.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        // Order
        [createOrder.fulfilled]: () => {
            toast.success("Buyurmangiz jo'natildi, tez orada siz bilan bo'glanishadi!")
        },
        [createOrder.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        },
        // Send Message
        [sendMessage.fulfilled]: () => {
            toast.success("Sizning murojaatingiz yuborildi, sizga tez orada bog'lanishadi! ")
        },
        [sendMessage.rejected]: (undefined, action) => {
            toast.error(action.payload.message)
        }
    }
})

export const { } = apphSlice.actions

export default apphSlice.reducer

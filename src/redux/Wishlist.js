// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"
// import { findWishList } from '../utility/Utils'

export const getWishLists = createAsyncThunk('app/getWishLists', async () => {
    const response = await http.get('/wish-lists')
    return response.data?.data
})

export const addToWishList = createAsyncThunk('app/addToWishList', async (id, { dispatch, getState, rejectWithValue }) => {
    const isAuth = getState()?.auth?.isAuth
    if (isAuth) {
        try {
            const response = await http.post('/wish-lists', { product_id: id })
            dispatch(getWishLists())
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    } else {
        return rejectWithValue("Siz wishlistga qo'shish uchun ro'yxatdan o'tgan bolishingiz kerak!")
    }

})

export const deleteFromWishList = createAsyncThunk('app/deleteFromWishList', async (id, { dispatch }) => {
    const response = await http.delete(`/wish-lists/${id}`)
    dispatch(getWishLists())
    return response.data

})


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {
        clearWishlist: (state) => {
            state.wishlist = []
        }
    },
    extraReducers: {
        [getWishLists.fulfilled]: (state, action) => {
            state.wishlist = action.payload
        },
        [getWishLists.rejected]: () => {
            toast.error("Tizimda xatolik bor !")
        },
        [addToWishList.fulfilled]: () => {
            toast.success("WishListga qo'shildi!")
        },
        [addToWishList.rejected]: (undefined, action) => {
            if (action.payload?.message) toast.error(action.payload.message)
            toast.warning(action.payload)
        },
        [deleteFromWishList.fulfilled]: () => {
            toast.success("WishListdan o'chirildi!")
        },
        [deleteFromWishList.rejected]: (action) => {
            toast.error(action.payload)
        }

    }
})

export const { clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer

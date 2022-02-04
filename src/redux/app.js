// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const home = createAsyncThunk('app/Home', async (data) => {
    const response = await http.get('/home-page', data)
    return response.data
})

export const apphSlice = createSlice({
    name: 'app',
    initialState: {
        newProducts: [],
        categories: [],
        recProducts: []
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
        [home.fulfilled]: (state, action) => {
            const { categories, new_comers, recommended } = action?.payload
            state.categories = categories
            state.newProducts = new_comers
            state.recProducts = recommended
        },
        [home.rejected]: () => {
            toast.error("Serverda xatolik!")
        }
    }
})

export const { } = apphSlice.actions

export default apphSlice.reducer

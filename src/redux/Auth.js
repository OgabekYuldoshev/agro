// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const loadUser = createAsyncThunk('app/getProfile', async () => {

  const token = localStorage.getItem('accessToken')
  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`
  }
  const response = await http.get('/auth/user-profile')
  if (response?.data?.data) {
    return {
      isAuth: true,
      user: response.data?.data
    }
  } else {
    return {
      isAuth: false,
      user: response.data?.data
    }
  }
})

export const login = createAsyncThunk('app/Login', async (data) => {
  const response = await http.post('/auth/login', data)
  return response.data
})

export const register = createAsyncThunk('app/Register', async (data) => {
  const response = await http.post('/auth/register', data)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isAuth: false,
    modal: false,
    accessToken: localStorage.getItem('accessToken')
  },
  reducers: {
    handleLogout: state => {
      state.userData = {}
      state.accessToken = ''
      state.isAuth = false
      localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
      toast.success("Siz muvaffaqiyatli profilingizdan chiqdingiz!")
    },
    handleAuthModal: state => {
      state.modal = !state.modal
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.accessToken = action?.payload?.access_token
      localStorage.setItem('accessToken', action.payload.access_token)
      state.modal = false
      toast.success("Siz muvaffaqiyatli profilingizga kirdingiz!")
    },
    [login.rejected]: () => {
      toast.error("Username yoki Parol xato !")
    },
    [loadUser.fulfilled]: (state, action) => {
      state.userData = action?.payload?.user
      state.isAuth = action?.payload?.isAuth
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    [register.fulfilled]: () => {
      toast.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!")
    },
    [register.rejected]: () => {
      toast.error("Tizimda xatolik bor !")
    }
  }
})

export const { handleLogout, handleAuthModal } = authSlice.actions

export default authSlice.reducer

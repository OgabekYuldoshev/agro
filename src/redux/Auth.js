// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"

export const loadUser = createAsyncThunk('app/getProfile', async () => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`
  }
  const response = await http.get('/admin/admin-profile')
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
  const response = await http.post('/admin/login', data)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isAuth: false,
    accessToken: localStorage.getItem('accessToken')
  },
  reducers: {
    handleLogout: state => {
      state.userData = {}
      state.accessToken = ''
      state.isAuth = false
      localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
    }
    // checkAuthUser: state => {
    //   const token = JSON.parse(localStorage.getItem('accessToken'))
    //   if (token) {
    //     loadUser()
    //     state.isAuth = true
    //   } else {
    //   }
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action?.payload?.access_token
        localStorage.setItem('accessToken', action.payload.access_token)
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.userData = action?.payload?.user
        state.isAuth = action?.payload?.isAuth
        localStorage.setItem('userData', JSON.stringify(action.payload))
      })
  }
})

export const { handleLogout } = authSlice.actions

export default authSlice.reducer

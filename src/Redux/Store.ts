"use client"
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import userReducer from './UserSlice'
export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
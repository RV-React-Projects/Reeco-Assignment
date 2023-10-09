import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { data } from "../../PageComponents/makeData"

export type orderList = {
  id: number
  name: string
  brand: string
  price: string
  quantity: number
  total: number
  status: number
  updated: number
}

export interface CounterState {
  orders: orderList[]
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  orders: data,
  value: 0,
  status: "idle",
}

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    acceptOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload ? { ...item, status: 1 } : item,
      )
    },
    rejectOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload ? { ...item, status: 2 } : item,
      )
    },
    editOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload ? { ...item, status: 3 } : item,
      )
    },
  },
})

export const { acceptOrder, rejectOrder, editOrder } = orderSlice.actions

export const selectCount = (state: RootState) => state.order.value

export default orderSlice.reducer

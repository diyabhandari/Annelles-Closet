//we'll use this template to create more slices

import { createAppSlice } from "../../app/createAppSlice"
import { fetchCount } from "./productListAPI"

const initialState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createAppSlice({
  name: "counter",

  initialState,

  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    incrementAsync: create.asyncThunk(
      async amount => {
        const response = await fetchCount(amount)
        return response.data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value += action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})
export const {increment} =
  counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors

export default counterSlice.reducer


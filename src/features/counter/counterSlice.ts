import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
    value: number
  }
  
  const initialState: CounterState = {
    value: 0,
  }
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      multiply: {
        reducer: (state, action: PayloadAction<number>)=>{
            state.value = state.value * action.payload;
        },
        prepare: (value?: number)=>({payload:value||2}),
      },
      reset: (state)=>{
        state.value=0
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, multiply, reset} = counterSlice.actions
  
  export default counterSlice.reducer
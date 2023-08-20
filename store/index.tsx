import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart.slice'

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store

export type IRootState = ReturnType<typeof rootReducer>

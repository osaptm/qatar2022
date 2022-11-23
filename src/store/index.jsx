import { configureStore } from '@reduxjs/toolkit'
import qatarSlice from './slices/qatar.slice'

export default configureStore({
    reducer: {
        qatar:qatarSlice,
    }
})

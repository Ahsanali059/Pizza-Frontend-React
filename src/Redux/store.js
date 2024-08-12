import {configureStore} from "@reduxjs/toolkit"
import AuthSliceReducer from "./Slices/AuthSlice"
import CartReducer from "./Slices/CartSlice"
import OrderReducer from './Slices/OrderSlice'
import ProductReducer from './Slices/ProductSlice'

export const store = configureStore({
    //all of the reducers
    reducer: {
         auth:AuthSliceReducer,
         cart:CartReducer,
         order:OrderReducer,
         product:ProductReducer,    
    },
    devTools:true,
    middleware:getDefaultMiddleware =>{
        getDefaultMiddleware({
            serializableCheck: false,
        })
    }
});



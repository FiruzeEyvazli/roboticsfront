import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getProductsThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get('http://localhost:5050/products')
    return response.data
})

export const postBasketThunk = createAsyncThunk('post/basket', async (data) => {
    const response = await axios.post('http://localhost:5050/basket', data)
    return data
})

export const addFormikThunk = createAsyncThunk('post/formik', async (data) => {
    const response = await axios.post('http://localhost:5050/products', data)

    return data
})

export const deleteProductsThunk = createAsyncThunk('products/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5050/products/${id}`)

    return id
})


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {},


    extraReducers: builder => {
        builder

        .addCase(getProductsThunk.fulfilled, (state,action) => {
            state.loading= false
            state.products= action.payload
        })

        .addCase(getProductsThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(getProductsThunk.rejected, (state,action) => {
            state.loading= false
            state.error= action.error.message
        })

         //post basket

         .addCase(postBasketThunk.fulfilled, (state,action) => {
            state.loading= false
           
        })

        .addCase(postBasketThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(postBasketThunk.rejected, (state,action) => {
            state.loading= false
            state.error= action.error.message
        })

        //formik 

        .addCase(addFormikThunk.fulfilled, (state,action) => {
            state.loading= false
           
        })

        .addCase(addFormikThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(addFormikThunk.rejected, (state,action) => {
            state.loading= false
            state.error= action.error.message
        })

        //delete admin

        .addCase(deleteProductsThunk.fulfilled, (state,action) => {
            state.loading= false
            state.products= state.products.filter(item => item._id !== action.payload)
        })

        .addCase(deleteProductsThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(deleteProductsThunk.rejected, (state,action) => {
            state.loading= false
            state.error= action.error.message
        })
    }
})



export default productSlice.reducer
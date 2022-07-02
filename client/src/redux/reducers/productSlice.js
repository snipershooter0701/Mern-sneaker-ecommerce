import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (thunkAPI) => {
        let res = await axios.get('/api/products/')
        let products = res.data
  return products
})


const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    filteredProducts: [],
    images: [],
    curIndex: 0,
    slideIndex: 0,
    productId: 0,
    product: [],
    loading:true,
    error: false,
    errMsg: ''
  },

  // productSlice
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products
      state.loading = false
    },
    setError: (state, action) =>{
      state.loading= false
      state.error = true
      state.errMsg = action.payload.err
    },
    getFilteredProducts: (state, action) => { 
      state.filteredProducts = state.products.filter((item) =>
        item.categories.at(-1).gender.includes(action.payload.gender)
      )
    },
    changeImage: (state, action) => {
      // CHANGE PREVIEW IMG ON CLICK
      state.curIndex = action.payload.index
    },
    prevPreview: (state, action) => {
      if (state.curIndex < 1) {
        state.curIndex = 0
      } else {
        state.curIndex -= 1
      }
    },
    nextPreview: (state, action) => {
      if (state.curIndex > (state.images.length - 2)) {
        state.curIndex = state.images.length - 1
      } else {
        state.curIndex += 1
      }
    },
    prevSlide: (state, action) => {
      if (state.slideIndex < 1) {
        state.slideIndex = 0
      } else {
        state.slideIndex -= 1
      }
    },
    nextSlide: (state, action) => {
      if (state.slideIndex > (state.images.length - 2)) {
        state.slideIndex = state.images.length - 1
      } else if ((state.slideIndex > (state.images.length - 3) && window.innerWidth > 640)) {
        state.slideIndex = state.images.length - 2
      }
      else {
        state.slideIndex += 1
      }
    },
    getProductItem: (state, action) => {
      state.productId = action.payload.productId
      state.product = state.products.filter((item)=>item._id === state.productId)[0]
      state.images = state.product.img
    }
  },
  extraReducers:{
    [getAllProducts.pending]: (state) => {
      state.loading = true
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errMsg = payload.errMsg
    },
  }
}
)

export const { getProducts, setError, getFilteredProducts, changeImage, prevPreview, nextPreview, prevSlide, nextSlide, getProductItem, quantityCount } = productSlice.actions;
export default productSlice.reducer;
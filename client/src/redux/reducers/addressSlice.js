import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAddress = createAsyncThunk('address/getUserAddress', async ({ user }, { rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }

    let { data } = await axios.get(`/api/address/${user}`, config)
    console.log(data)
    return data

  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const createAddress = createAsyncThunk('address/createAddress', async (
  // { firstname, lastname, phone, zipcode, streetAddress, user }
  addressData
  , { getState, rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }

    // const { firstname, lastname, phone, zipcode, streetAddress, user } = addressData
    await axios.post(`/api/address/`,
      // { firstname, lastname, phone, zipcode, streetAddress, user }
      (addressData)
      , config)
    let { data } = await axios.get(`/api/address/${addressData.user}`, config)


    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const deleteAddress = createAsyncThunk('address/deleteAddress', async (
  { address, user }
  , { getState, rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }

    await axios.delete(`/api/address/${address}`, config)
    let { data } = await axios.get(`/api/address/${user}`, config)
    console.log('address deleted')
    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const updateAddress = createAsyncThunk('address/updateAddress', async (addressInfo, { getState, rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }

    await axios.put(`/api/address/${addressInfo._id}`, addressInfo, config)
    let { data } = await axios.get(`/api/address/${addressInfo.user}`, config)

    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)


const addressSlice = createSlice({
  name: "address",
  initialState: {
    loading: false,
    error: false,
    success: false,
    errMsg: '',
    addresses: [],
    showAddressForm: false,
    deleting: false,
    updateForm: false,
    addressIndex: null
  },
  reducers: {
    addressFormDisplay: (state, action) => {
      state.showAddressForm = true
    },
    hideAddressForm: (state, action) => {
      state.showAddressForm = false
      state.updateForm = false
      state.addressIndex = null
    },
    updateFormDisplay: (state, action) => {
      state.updateForm = true
      state.showAddressForm = false

      // TO GET THE INDEX OF THE CLICKED ADDRESS YOU WANT TO UPDATE
      state.addressIndex = action.payload.addressIndex
    }
  },
  extraReducers: {
    [getUserAddress.pending]: (state) => {
      state.loading = true
      state.error = false
      state.success = false
    },
    [getUserAddress.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.addresses = payload
      state.errorMsg = ''
      state.showAddressForm = false
      state.success = true
    },
    [getUserAddress.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload
      state.success = false
    },
    [createAddress.pending]: (state) => {
      state.loading = true
      state.error = false
      state.success = false
    },
    [createAddress.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.addresses = payload
      state.errorMsg = ''
      state.showAddressForm = false
      state.success = true
    },
    [createAddress.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload.msg ? payload.msg : payload
      state.success = false
    },
    [deleteAddress.pending]: (state) => {
      state.loading = true
      state.error = false
      state.deleting = true
      state.success = false
    },
    [deleteAddress.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.addresses = payload
      state.errorMsg = ''
      state.showAddressForm = false
      state.deleting = false
      state.success = true
    },
    [deleteAddress.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload.msg ? payload.msg : payload
      state.deleting = false
      state.success = false
    },
    [updateAddress.pending]: (state) => {
      state.loading = true
      state.error = false
      state.success = false
    },
    [updateAddress.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.addresses = payload
      state.errorMsg = ''
      state.updateForm = false
      state.success = true
    },
    [updateAddress.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload
      state.success = false
    },
  }
})


export const { addressFormDisplay, hideAddressForm, updateFormDisplay } = addressSlice.actions;
export default addressSlice.reducer
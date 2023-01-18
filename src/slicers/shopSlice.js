import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProds,addNewProd,delProd,updProd } from './shopAPI';

const initialState = {
  prods:[],
  updStatus:false
};

export const getProdsAsync = createAsyncThunk(
  'shop/fetchProds',
  async () => {
    const response = await fetchProds();
    return response.data;
  }
);

export const addProdsAsync = createAsyncThunk(
    'shop/addNewProd',
    async (newProd) => {
      const response = await addNewProd(newProd);
      return response.data;
    }
  );
  export const delProdAsync = createAsyncThunk(
    'shop/delProd',
    async (id) => {
      const response = await delProd(id);
      return response.data;
    }
  );
  export const updProdAsync = createAsyncThunk(
    'shop/updProd',
    async (payload) => {
        console.log(payload)
      const response = await updProd(payload);
      return response.data;
    }
  );
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    testOnly: (state) => {
      state.prods.push( {
        "desc": "new prodtest - only",
        "price": 1
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProdsAsync.fulfilled, (state,action) => {
        state.prods=action.payload
      }).addCase(addProdsAsync.fulfilled, (state,action) => {
        state.prods.push( action.payload)
        state.updStatus = !state.updStatus
      }).addCase(delProdAsync.fulfilled, (state) => {
        state.updStatus = !state.updStatus
      }).addCase(updProdAsync.fulfilled, (state) => {
        console.log(state.updStatus)
        state.updStatus = !state.updStatus
      })
  },
});

export const { testOnly } = shopSlice.actions;
export const selectProds = (state) => state.shop.prods;
export const selectupdStatus = (state) => state.shop.updStatus;

export default shopSlice.reducer;

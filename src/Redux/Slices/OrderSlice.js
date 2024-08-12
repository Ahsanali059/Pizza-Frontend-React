import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  ordersData: null,
};

export const placeOrder = createAsyncThunk("/order/placeOrder", async () => {
  try {
    const response = axiosInstance.post(`/orders/place`);

    toast.promise(response, {
      loading: "Placing order...",
      success: "Order placed successfully",
      error: "Failed to place order",
    });

    const apiResponse = await response;
    return apiResponse.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to place order");
  }
});

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.ordersData = action?.payload?.data;
    });
  },
});

export default OrderSlice.reducer;

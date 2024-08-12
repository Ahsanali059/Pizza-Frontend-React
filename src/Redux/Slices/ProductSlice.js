import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  productsData: [], //Array of Product
};

export const getAllProducts = createAsyncThunk("/products/getAll", async () => {
  try {
    const response = axiosInstance.get("/products");
    toast.promise(product, {
      loading: "Loading products...",
      success: "Products loaded successfully",
      error: "Failed to load products",
    });
    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong ");
  }
});

export const getProductDetails = createAsyncThunk(
  "/products/getDetails",
  async (id) => {
    try {
      const response = axiosInstance.get(`/products/${id}`);
      toast.promise(product, {
        loading: "Loading the Product",
        success: "Product loaded successfully",
        error: "Failed to load product",
      });

      const apiResponse = await response;
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Failed to get product details");
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.productsData = action?.payload?.data?.data;
    });
  },
});


export default ProductSlice.reducer;

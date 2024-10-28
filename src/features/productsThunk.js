import axios from "axios";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productsSlice";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

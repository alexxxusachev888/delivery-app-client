import axios from "axios";
import { errorHandler } from "../helpers/ErrorHandler";

axios.defaults.baseURL = "https://delivery-app-eiftech.onrender.com";

export const getAllBurgers = errorHandler(async () => {
    return await axios.get("/api/burgers");
  });
  
export const getOrdersByPhoneOrEmail = async (query) => {
    return await axios.get(`/api/orders?searchQuery=${query}`);
}
  
export const addNewOrder = errorHandler(async (orderData) => {
    return await axios.post("/api/orders", orderData);
});
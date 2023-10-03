import axios from "axios";

const apiUrl = "https://dummyjson.com/products";

async function getProducts() {
  try {
    const response = await axios.get(apiUrl); 
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}

export default getProducts;
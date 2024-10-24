import axios from 'axios';

const API_KEY = 'YOUR_TRENDYOL_API_KEY';
const SUPPLIER_ID = 'YOUR_SUPPLIER_ID';

const getProducts = async () => {
  try {
    const response = await axios.get(`https://api.trendyol.com/sapigw/suppliers/${SUPPLIER_ID}/products`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getProducts;
import axios from 'axios';
const url = "http://localhost:8080/api/products";

export const getProducts=()=>axios.get(url)


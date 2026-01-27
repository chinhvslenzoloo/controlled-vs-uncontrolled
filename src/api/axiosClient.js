import axios from "axios";

// Axios instance үүсгэж байна
// Ингэснээр бүх API call нэг BASE URL ашиглана
const axiosClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000, // 10 секунд хүлээнэ
});

export default axiosClient;

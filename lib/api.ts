import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-modul-8-dbs-production.up.railway.app/",
});

export default api;
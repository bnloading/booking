import axios from "axios";
// localhost dep jazatn bolsan hate jibered sol sebepti ipdi engizdm
const BASE_URL = "http://192.168.0.103:1337/api";
const API_KEY =
  "293fec0bfd7d49ca5c03076ca490ac77a02a5bca3667687b5c602f2ef2c704e22476b82b7177666d6ebd5f0ed17c962fea4d4e019e7e0f088e35e9afa34c5769dd1e5e87a480bd1e34994e431d6ac9e610772efba9059bb38ab4a4bc75491c52e28ef049c27de8285bfe08d1f325c63dae0ef87fa5daaa1e017f161757aa953d";
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "Bearer" + API_KEY },
});
// get - alu
const getHero = () => AxiosInstance.get("/categories?populate=*");
const getMovie = () => AxiosInstance.get("/randoms?populate=*");
// slideti backendten alu
const getSlider = () => AxiosInstance.get("/sliders?populate=*");
// qyshqasha tanistirudagi doctorlardi alu
const getPremium = () => AxiosInstance.get("/hospitals?populate=*");
// clientterdi alu
const getUser = () => AxiosInstance.get("/users");
// jenimpazdi anihtau
const getWinners = () => AxiosInstance.get("/usersses?populate=*");
// categorylardi alu
const getHospitalByCategory = (category) =>
  AxiosInstance.get(
    `/hospitals?filters[categories][Name][$in]=${category}&populate=*`
  );
// bron jasau
// post- jiberu
const createAppointment = async (data) => {
  try {
    const response = await AxiosInstance.post("/appointments", data);
    return response.data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error; // Re-throw the error for better error handling
  }
};
// barlih doctorlardi backend boliminen alu
const getAllHospital = () => {
  return AxiosInstance.get("/hospitals?populate=*");
};
// brondalgan malimentterdi alu
const getUserAppointment = (email) => {
  return AxiosInstance.get(
    `/appointments?filters[email][$eq]=${email}&populate=*`
  );
};
const getQyzmetter = () => {
  return AxiosInstance.get("/qyzmetters?populate=*");
};
const getQyzmetter2 = () => {
  return AxiosInstance.get("/qyzmetter2s?populate=*");
};
const getQyzmetter3 = () => {
  return AxiosInstance.get("/qyzmetter3s?populate=*");
};
const getMasters = () => {
  return AxiosInstance.get("/masters?populate=*");
};
// export isteu
export default {
  getHero,
  getSlider,
  getPremium,
  getHospitalByCategory,
  createAppointment,
  getUser,
  getAllHospital,
  getUserAppointment,
  getWinners,
  getMovie,
  getQyzmetter,
  getQyzmetter2,
  getQyzmetter3,
  getMasters,
};

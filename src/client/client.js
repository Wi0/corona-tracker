import axios from "axios";

export const getCountryData = () => {
  return axios.get("https://corona.lmao.ninja/countries");
};

export const getTotalData = () => {
  return axios.get("https://corona.lmao.ninja/all");
};

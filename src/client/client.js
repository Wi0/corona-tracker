import axios from "axios";
const API_COUNTRIES =
  "https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/countries";
const API_TOTAL =
  "https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/all";
const API_COUNTRY_LIST = "https://api.covid19api.com/countries";

export const getCountryData = () => {
  return axios.get(API_COUNTRIES);
};

export const getTotalData = () => {
  return axios.get(API_TOTAL);
};

export const getHistoryData = country => {
  const API_HISTORY = `https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`;
  return axios.get(API_HISTORY);
};

export const getCountryList = () => {
  return axios.get(API_COUNTRY_LIST);
};

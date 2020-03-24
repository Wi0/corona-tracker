import axios from "axios";
const API_COUNTRIES = "https://corona.lmao.ninja/countries";
const API_TOTAL = "https://corona.lmao.ninja/all";
const API_HISTORY_BASE = "https://api.covid19api.com/total/dayone/country/";
let API_HISTORY_COUNTRY = "united-kingdom";
const API_HISTORY_ENDING = "/status/confirmed";
const API_COUNTRY_LIST = "https://api.covid19api.com/countries";

export const getCountryData = () => {
  return axios.get(API_COUNTRIES);
};

export const getTotalData = () => {
  return axios.get(API_TOTAL);
};

export const getHistoryData = country => {
  API_HISTORY_COUNTRY = country;
  const API_HISTORY =
    API_HISTORY_BASE + API_HISTORY_COUNTRY + API_HISTORY_ENDING;
  return axios.get(API_HISTORY);
};

export const getCountryList = () => {
  return axios.get(API_COUNTRY_LIST);
};

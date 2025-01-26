import axios from "axios";
import { getAllEventsUrl, getAllNoticeUrl } from "./url";

const baseUrl = "https://school-demo-s30e.onrender.com/api";
const timeout = 10000;

// Create an axios Instance with default configuration which remain same for all request made using this instance
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: timeout,

  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllNotice = async () => {
  try {
    const response = await axiosInstance.get(getAllNoticeUrl);

    console.log("src :: api :: getAllNotice :: response", response.data);
    return response.data;
  } catch (error) {
    console.log("src :: api :: getAllNotice :: error", error);
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await axiosInstance.get(getAllEventsUrl);

    console.log("src :: api :: getAllEvents :: response", response);
    return response.data;
  } catch (error) {
    console.log("src :: api :: getAllEvents :: error", error);
    throw error;
  }
};

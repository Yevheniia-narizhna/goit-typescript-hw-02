import axios from "axios";
import { Image } from "../App/App.types";

const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "jwVCJI0N_zw5LuVuX1p6Gjswiefo7xOd2WCvT7ETsD0";

interface RespImage {
  results: Image[];
  total: number;
  total_page: number;
}

export const fetchPictures = async (
  query: string,
  page: number
): Promise<RespImage> => {
  try {
    const response = await axios.get<RespImage>(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

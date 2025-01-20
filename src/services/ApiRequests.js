import axios from "axios";

const API_KEY = "fee789bd1c9d42ea33a5e3a819ed36d4";
const BASE_URL = "https://api.themoviedb.org/3";

const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

const getMovieByName = async (text) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`
  );
  return response.data;
};

const getMovieById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

const getCredits = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

const getReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
export {
  getTrendingMovies,
  getMovieByName,
  getMovieById,
  getCredits,
  getReviews,
};

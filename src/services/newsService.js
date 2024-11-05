import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', country = 'us', query = '') => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          apiKey: API_KEY,
          category,
          country,
          q: query,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  };
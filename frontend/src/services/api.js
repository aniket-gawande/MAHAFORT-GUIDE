import axios from 'axios';
import { STATIC_FORTS_DATA, FORTS_LIST } from '../data/staticForts';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fort APIs with static fallback
export const getAllForts = async (params = {}) => {
  try {
    const response = await api.get('/forts', { params });
    return response;
  } catch (error) {
    console.warn('Backend unavailable, using static data');
    // Return static data in same format as API
    return { data: FORTS_LIST };
  }
};

export const getFortById = async (id) => {
  try {
    const response = await api.get(`/forts/${id}`);
    return response;
  } catch (error) {
    console.warn('Backend unavailable, using static data');
    // Return Sinhagad data
    if (STATIC_FORTS_DATA[id]) {
      return { data: STATIC_FORTS_DATA[id] };
    }
    throw new Error('Fort not found');
  }
};

export const getFeaturedForts = async () => {
  try {
    const response = await api.get('/forts/featured/list');
    return response.data;
  } catch (error) {
    console.warn('Backend unavailable, using static data');
    return FORTS_LIST;
  }
};

// Admin APIs
export const createFort = async (fortData) => {
  try {
    const response = await api.post('/admin/forts', fortData);
    return response.data;
  } catch (error) {
    console.error('Error creating fort:', error);
    throw error;
  }
};

export const updateFort = async (id, fortData) => {
  try {
    const response = await api.put(`/admin/forts/${id}`, fortData);
    return response.data;
  } catch (error) {
    console.error('Error updating fort:', error);
    throw error;
  }
};

export const deleteFort = async (id) => {
  try {
    const response = await api.delete(`/admin/forts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting fort:', error);
    throw error;
  }
};

export default api;
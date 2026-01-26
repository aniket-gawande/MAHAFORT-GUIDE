import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fort APIs
export const getAllForts = async (params = {}) => {
  try {
    const response = await api.get('/forts', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching forts:', error);
    throw error;
  }
};

export const getFortById = async (id) => {
  try {
    const response = await api.get(`/forts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fort details:', error);
    throw error;
  }
};

export const getFeaturedForts = async () => {
  try {
    const response = await api.get('/forts/featured/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured forts:', error);
    throw error;
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
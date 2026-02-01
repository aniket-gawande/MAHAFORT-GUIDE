import axios from 'axios';

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
    console.warn('Backend unavailable, fetching static data');
    // Fetch from public folder
    const staticResponse = await fetch('/data/sinhagad.json');
    const fortData = await staticResponse.json();
    return {
      data: [{
        _id: 'sinhagad',
        name: 'Sinhagad Fort',
        ...fortData
      }]
    };
  }
};

export const getFortById = async (id) => {
  try {
    const response = await api.get(`/forts/${id}`);
    return response;
  } catch (error) {
    console.warn('Backend unavailable, fetching static data');
    // Fetch Sinhagad data from public folder
    if (id === 'sinhagad') {
      const staticResponse = await fetch('/data/sinhagad.json');
      const fortData = await staticResponse.json();
      return { data: fortData };
    }
    throw new Error('Fort not found');
  }
};

export const getFeaturedForts = async () => {
  try {
    const response = await api.get('/forts/featured/list');
    return response.data;
  } catch (error) {
    console.warn('Backend unavailable, fetching static data');
    const staticResponse = await fetch('/data/sinhagad.json');
    const fortData = await staticResponse.json();
    return [{
      _id: 'sinhagad',
      name: 'Sinhagad Fort',
      ...fortData
    }];
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
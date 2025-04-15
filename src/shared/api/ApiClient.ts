import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'url',
	headers: {
		'Content-Type' : 'application/json'
	}
});

apiClient.interceptors.request.use((config ) => {
	const token = localStorage.getItem('token');
	if(token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
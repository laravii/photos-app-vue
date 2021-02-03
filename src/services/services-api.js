import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const UsersApi = async () => {
  const user = 'users';
  const res = await api.get(user);
  return res.data;
};

export const AlbumApi = async (id) => {
  const user = `/user/${id}/albums`;
  const res = await api.get(user);
  return res.data;
};

export const PhotosApi = async (id) => {
  const user = `/albums/${id}/photos`;
  const res = await api.get(user);
  return res.data;
};

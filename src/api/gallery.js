 import { api } from './api'

export const getAllPhotos = async (q, page) => {
  const { data } = await api(`?q=${q}&page=${page}&key=40367315-3c91d510b26c4724b33f253c9&per_page=12`)
  return data;
}
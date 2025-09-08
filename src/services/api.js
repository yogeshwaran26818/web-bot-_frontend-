import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://web-bot-backend.vercel.app/api' 
    : '/api'
})

export const uploadLink = (url, token) => 
  api.post('/links/upload', { url }, {
    headers: { Authorization: `Bearer ${token}` }
  })

export const getLinks = (token) =>
  api.get('/links', {
    headers: { Authorization: `Bearer ${token}` }
  })

export const getLink = (id, token) =>
  api.get(`/links/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

export const trainRAG = (linkId, token) =>
  api.post(`/rag/train/${linkId}`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  })

export const queryRAG = (question, linkId, token) =>
  api.post(`/rag/query/${linkId}`, { question }, {
    headers: { Authorization: `Bearer ${token}` }
  })

export default api
import api from './axios'

export const getOrderList = (params?: any) => api.get('/boss/orders', { params })
export const getOrderById = (id: number) => api.get(`/boss/orders/${id}`)

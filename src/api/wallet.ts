import api from './axios'

export const getBalance = () => api.get('/boss/balance')
export const getRechargeRecords = (params?: any) => api.get('/boss/recharges', { params })
export const createRecharge = (data: { amount: number }) => api.post('/boss/recharges', data)

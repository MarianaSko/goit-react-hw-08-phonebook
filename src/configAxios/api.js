import axios from "axios";

export const api = axios.create({ baseURL: 'https://connections-api.herokuapp.com/' })

export const setToken = token => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const clearToken = () => {
    delete api.defaults.headers.common.Authorization
}
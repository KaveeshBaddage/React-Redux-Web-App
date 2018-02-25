import axios from 'axios';

// TODO: Replace this with actual JWT token from Keycloak
const id_token = "secret";

// Create axios instance for api calls
var instance = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: { 'Authorization': 'Bearer ' + sessionStorage.jwt }
});

export const Get = (route, data) => (
    instance.get(route, data == {} ? null : JSON.stringify(data))
)

export const Post = (route, data) => (
    instance.post(route, JSON.stringify(data))
)

export const Put = (route, data) => (
    instance.put(route, JSON.stringify(data))
)

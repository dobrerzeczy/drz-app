import axios from 'axios';

const app = axios.create({
    headers: {
        accept: "Application/json",
    },
    baseURL: "http://localhost:3001"
})
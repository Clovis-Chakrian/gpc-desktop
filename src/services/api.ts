import axios from 'axios';
import { io } from 'socket.io-client';

const http = axios.create({
  baseURL: 'http://localhost:3333'
});

const socket = io(`${'http://localhost:3333'}`);

const api = { http, socket };

export default api;
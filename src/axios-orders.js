import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vicky-burger.firebaseio.com/'
});

export default instance;
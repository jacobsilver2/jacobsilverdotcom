import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jacobsilverdotcom.firebaseio.com/'
})

export default instance;
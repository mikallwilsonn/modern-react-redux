import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 413063831b1b714d29611a0e6afc13ca62be1007b87b4b873b3cd3dcdb5dcd74'
    }
});
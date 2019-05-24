import Axios from 'axios';

export default Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

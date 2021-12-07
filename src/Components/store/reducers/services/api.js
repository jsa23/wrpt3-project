import axios from 'axios';

export function getItems() {
    return axios.get('api/home')
    .then(response => {
        console.log(response)
    })
}
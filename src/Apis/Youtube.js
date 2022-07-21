import axios from 'axios';

const KEY = 'AIzaSyDeMbjpT1bjbaSGbK6LSCBzndqQJZ2HJFU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        key: KEY,
        type:'vidio'
        
    }
});
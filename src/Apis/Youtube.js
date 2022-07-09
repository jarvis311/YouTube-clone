import axios from 'axios';

const KEY = 'AIzaSyDD6-AJd78kkYU9o4DdgspjwK5mgLAnJCg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        key: KEY,
        type:'vidio'
        
    }
});
import axios from 'axios';

const KEY = 'AIzaSyAr1R_iV3iXnwDReQGEG-pfhqWWefyOMzE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})
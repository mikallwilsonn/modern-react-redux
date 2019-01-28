import axios from 'axios';

// ----
// You will need to get a YouTube Data API v3 key as
// ../config/keys.js is ignored by .git
import keys from '../config/keys';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: keys.youtube
    }
});
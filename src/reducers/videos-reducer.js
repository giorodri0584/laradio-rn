import { GET_ALL_VIDEOS } from '../types';

const VideosReducer = (state = [], action) => {
    switch(action.type) {
        case GET_ALL_VIDEOS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default VideosReducer;
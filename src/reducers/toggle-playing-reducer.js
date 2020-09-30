import { TOGGLE_PLAYING } from '../types';
export default togglePlayingReducer = (state = false, action) => {
    if(action.type === TOGGLE_PLAYING) {
        state = action.payload;
        return state;
    }
    return state;
}
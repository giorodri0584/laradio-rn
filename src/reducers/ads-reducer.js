import { INCREMENT_ADS_COUNTER } from '../types';


export default adsReducer = (state = 0, action) => {
    if(action.type === INCREMENT_ADS_COUNTER ) {
        if(state === 4) {
            return 0;
        }
        return state + 1;
    }else {
        return state;
    }
} 
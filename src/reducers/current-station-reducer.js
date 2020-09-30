import { CHANGE_STATION } from '../types';
const INITIAL_STATION = {"id":6,"name":"La Bakana","url":"http://radio.domint.net:8124/;/stream/1","logoUrl":"https://firebasestorage.googleapis.com/v0/b/la-radio-rd.appspot.com/o/La%20Bacana%20SD.png?alt=media&token=5f83b758-d30f-475d-b664-731b9dc2bc28","frequency":"105.7","ciudad":"Santo Domingo"};

export default currentStationReducer = (state = INITIAL_STATION, action) => {
    if(action.type === CHANGE_STATION){
        return action.payload;
    }
    return state;
}
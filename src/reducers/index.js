import { combineReducers } from 'redux';

import VideosReducer from './videos-reducer';
import CurrentStationReducer from './current-station-reducer';
import TogglePlayingReducer from './toggle-playing-reducer';
import AdsReducer from './ads-reducer';
import StationsReducer from './stations-reducer';

const reducers = combineReducers({
    videos: VideosReducer,
    currentStation: CurrentStationReducer,
    isPlaying: TogglePlayingReducer,
    adCounter: AdsReducer,
    stations: StationsReducer
});

export default reducers;
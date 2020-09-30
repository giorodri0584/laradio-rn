import { CHANGE_STATION, TOGGLE_PLAYING } from '../types';
import AsyncStorage from '@react-native-community/async-storage';

const SAVE_STATION = "SAVE_STATION";
const saveStation = async (station) => {
    try {
        await AsyncStorage.removeItem(SAVE_STATION);
        const jsonString = JSON.stringify(station);
        await AsyncStorage.setItem(SAVE_STATION, jsonString);
    }catch(e) {
        console.log(e);
    }
}

export const changeStation = (station) => {
    return (dispatch) =>{
        saveStation(station).then(() => {
            dispatch({type: CHANGE_STATION, payload: station});
        })
    };
}

export const togglePaying = (isPlaying) => {
    return {
        type: TOGGLE_PLAYING,
        payload: isPlaying
    };
}

export const nextStation = async (station) => {
    return (dispatch) => {
        let stationId = station.id + 1; //this.state.currentStation.id + 1;
        if (stationId <= 12) {
            TrackPlayer.skip(stationId.toString());
            TrackPlayer.play();
            this.setState({
                counter: this.state.counter + 1,
                currentStation: stations[stationId],
            });
            if (this.state.counter >= 4) {
                this.setState({counter: 1});
            }
        }
    }
  };
  export const previousStation = async () => {
    let stationId = this.state.currentStation.id - 1;
    if (stationId >= 0) {
      TrackPlayer.skip(stationId.toString());
      TrackPlayer.play();
      this.setState({
        counter: this.state.counter + 1,
        currentStation: stations[stationId],
      });
      if (this.state.counter >= 4) {
        this.setState({counter: 1});
      }
    }
  };
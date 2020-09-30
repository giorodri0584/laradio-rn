import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
//import stations from '../../assets/stations.json';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TrackPlayer from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';

import PlayerTop from '../player_top';
import StationsList from '../stations_list';

const StationScreen = () => {
  const [stations,setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState({});
  const [isPlaying,setIsPlaying] = useState(false);
  const [counter,setCounter] = useState(4);

  useEffect(() => {
    const tempStations = [];
    const subscriber = firestore()
      .collection('stations')
      .where('isWorking', '==', true)
      .onSnapshot(docs => {
        console.log('User data: ', docs.size);
        docs.forEach((doc) => {
          const station = doc.data();
          addStationToTrackPlayer(doc.data()); //TODO: add station if does not exist
          if(station.isWorking){
            tempStations.push(station);
          }
        });
        console.log("settingStations.....");
        setStations(tempStations);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const addStationToTrackPlayer = async (station) => {
    const track = await TrackPlayer.getQueue();
    await TrackPlayer.add({
      id: station.id,
      url: station.url,
      title: station.name,
      artist: station.ciudad,
      artwork: station.logoUrl
    });
  }
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
    const trackId = await TrackPlayer.getCurrentTrack();
    const queue = await TrackPlayer.getQueue();
    const index = queue.findIndex(station  => station.id === trackId);
    console.log("index: ", queue);
    getStation(trackId);
  }
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
    const trackId = await TrackPlayer.getCurrentTrack();
    getStation(trackId);
  }
  const getStation = (stationId) => {
    const found = stations.find(station => station.id === Number(stationId));
    setCurrentStation(found);
  }
  const togglePlayPause = async () => {
    if(isPlaying) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    }else {
      playStation(currentStation);
    }
  }

  const playStation = async station => {
    //await TrackPlayer.pause();
    TrackPlayer.skip(station.id.toString()).then((data) => {
      let refreshPlay = setInterval(async () => {
        let playerState = await TrackPlayer.getState();
        if (playerState !== TrackPlayer.STATE_STOPPED &&  playerState !== TrackPlayer.STATE_PLAYING) {
          console.log("state: " + playerState);
          await TrackPlayer.play();
        } else {
          clearInterval(refreshPlay);
        }
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    })
    setCurrentStation(station);
    setIsPlaying(true);
  };
  return (
    <>
        <StatusBar backgroundColor="#b53228" barStyle="light-content" />
        <View style={styles.mainScreen}>
          <PlayerTop
            currentStation={currentStation}
            playStation={station => playStation(station)}
            isPlaying={isPlaying}
            counter={counter}
            toggleStation={() => togglePlayPause()}
            skipToNext={() => skipToNext()}
            skipToPrevious={() => skipToPrevious()}
          />
          <View style={styles.listContent}>
            <StationsList
              stations={stations}
              selectStation={station =>
                setCurrentStation(station)
              }
              playStation={station => playStation(station)}
              counter={counter}
            />
          </View>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  listContent: {
    flex: 2,
    backgroundColor: '#fafafa',
  },
  mainScreen: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default StationScreen;
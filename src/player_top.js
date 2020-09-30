import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback, Image } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { IconButton, Colors } from 'react-native-paper';
import _ from 'lodash';

import AsyncStorage from '@react-native-community/async-storage';
// primary color #F44336
// subTitle #FAB0AC
const PlayerTop = (props) => {
  const {currentStation, isPlaying, toggleStation, skipToPrevious, skipToNext} = props;

  const togglePlayPause = () => {
    return isPlaying ? pauseButton() : playButton();
  };
  const playButton = () => {
    return (
      <IconButton
        icon="play"
        color="#ffffff"
        size={45}
        onPress={() => {
          toggleStation()
        }}
      />
    );
  };
  const pauseButton = () => {
    return (
      <IconButton
        icon="pause-circle"
        color="#ffffff"
        size={45}
        onPress={() => {
          toggleStation()
        }}
      />
    );
  };
  const renderPreviousIcon = () => {
    let stationId = currentStation.id - 1;
    return (
      <IconButton
        icon="skip-previous"
        color="#ffffff"
        size={36}
        onPress={() => {
          skipToPrevious();
        }}
      />
    );
  };
  const renderNextIcon = () => {
    let stationId = currentStation.id + 1;
    return (
      <IconButton
        icon="skip-next"
        color="#ffffff"
        size={36}
        onPress={() => {
          skipToNext();
        }}
      />
    );
  };

    
    return (
      <View style={styles.main}>
        <Text style={styles.textTitle}>{`${currentStation.frequency} FM`}</Text>
        <Text style={styles.textSubTitle}>
          {`${currentStation.name} - ${currentStation.ciudad}`}
        </Text>
        <View style={styles.playerControl}>
          {renderPreviousIcon()}
          {togglePlayPause()}
          {renderNextIcon()}
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F44336',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 36,
    color: '#ffffff',
  },
  textSubTitle: {
    fontSize: 18,
    color: '#FAB0AC',
  },
  playerControl: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPlay: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    width: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    currentStation: state.currentStation,
    isPlaying: state.isPlaying,
    adCounter: state.adCounter,
    stations: state.stations
  };
}

export default PlayerTop;

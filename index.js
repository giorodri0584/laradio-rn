/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/components/app';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import "./src/fix-timer-bug";
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
    const setUpTrackPlayer = async () => {
        console.log("setting up track player");
        await TrackPlayer.setupPlayer({
        waitForBuffer: true
        });
        TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_JUMP_FORWARD,
            TrackPlayer.CAPABILITY_JUMP_BACKWARD,
            TrackPlayer.CAPABILITY_STOP,
        ],
        compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE
        ]
        });
    }
    setUpTrackPlayer();

const Root = () => (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => Root);
TrackPlayer.registerPlaybackService(() => require('./service.js'));
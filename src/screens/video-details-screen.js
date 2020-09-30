import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
//import YouTube from 'react-native-youtube';
import { Avatar, List } from 'react-native-paper';
import TrackPlayer from 'react-native-track-player';
import { connect } from 'react-redux';
import { showAds } from '../actions/ads-action';
import { togglePaying } from '../actions/stations-action';
import YoutubePlayer from 'react-native-youtube-iframe';

class VideoDetailsScreen extends Component {
    constructor(props){
        super(props);
        if(TrackPlayer.STATE_PLAYING){
            TrackPlayer.pause();
        }
    }
    componentWillUnmount(){
        this.props.showAds(this.props.adCounter);
        this.props.togglePaying(false);
        console.log("unmount VideosDetail Screen");
    }
    render(){
        const { navigation } = this.props;
        const video = navigation.getParam("video");
        return (
            <View style={StyleSheet.content}>
                <YoutubePlayer
                    videoId={video.videoId}
                    play={true}
                    width={"100%"}
                    height={240}
                    origin="http://www.youtube.com"
                    />
                <View>
                    <List.Item
                        title={video.title}
                        description={video.author}
                        titleNumberOfLines={2}
                        left={props => <Avatar.Image {...props} size={50} source={{uri: video.channelImage}} />}
                        />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adCounter: state.adCounter
    };
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff'
    }
});

export default connect(mapStateToProps, { showAds, togglePaying })(VideoDetailsScreen);
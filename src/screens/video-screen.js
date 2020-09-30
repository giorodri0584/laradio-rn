import React, { Component } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Avatar, List, ActivityIndicator } from 'react-native-paper';
import { getAllVideo } from '../actions/videos-actions';
import { connect } from 'react-redux';

class VideoScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: []
        };
        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }
    componentDidMount() {
        this.props.getAllVideo();
    }
    renderVideos = (video) => {
        return (
            <TouchableWithoutFeedback
            onPress={() => {
                this.props.navigation.navigate('Details', {video: video})
            }}
            >
                <View>
                    <Image source={{uri: video.imageUrl}} style={{height: 200}}/>
                    <List.Item
                        title={video.title}
                        description={video.author}
                        left={props => <Avatar.Image {...props} size={50} source={{uri: video.channelImage}} />}
                        right={props => <List.Icon {...props} icon="dots-vertical" />}
                        titleStyle={{ fontSize: 16}}
                        titleNumberOfLines={2}
                        descriptionStyle={{ fontSize: 14 }}
                        style={{ backgroundColor: 'ffffff'}}
                        />
                </View>
            </TouchableWithoutFeedback>
        );
    }
    render() {
        const { videos } = this.props
        if(videos.length === 0){
            return (
                <View style={styles.loading}>
                    <ActivityIndicator animating={true} size="large" />
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.videos}
                renderItem= {({ item }) => this.renderVideos(item)}
                keyExtractor={item => item.videoId}
                showsVerticalScrollIndicator={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

const mapStateToProps = (states) => {
    return {
        videos: states.videos
    };
}

export default connect(mapStateToProps, {
    getAllVideo
})(VideoScreen);
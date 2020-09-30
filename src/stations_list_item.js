import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import {Card} from 'react-native-paper';

const StationsListItem = ({
  stations,
  city,
  playStation,
}) => {
  return (
    <View>
      <View>
        <Text style={styles.textTitle}>{city}</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stations}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              playStation(item);
              
            }}>
            <Card style={styles.card} elevation={4}>
              <Image source={{uri: item.logoUrl}} style={styles.imageStyle} />
            </Card>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 110,
    height: 110,
  },
  card: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  textTitle: {
    marginLeft: 8,
    marginTop: 16,
    fontSize: 16,
    color: '#808080',
  },
});

const mapStateToProps = (state) => {
  return {
    adCounter: state.adCounter
  };
}

export default StationsListItem;

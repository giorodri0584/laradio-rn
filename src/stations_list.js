import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import StationsListItem from './stations_list_item';

const StationsList = (props) => {
  const {stations, counter, playStation, selectStation} = props;
  const [cities] = useState(['Santiago', 'Santo Domingo']);
  return (
    <FlatList
      data={cities}
      renderItem={({item}) => (
        <StationsListItem
          stations={stations.filter(s => item.includes(s.ciudad))}
          selectStation={selectStation}
          playStation={playStation}
          city={item}
          counter={counter}
        />
      )}
      keyExtractor={(item, index) => item}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
});

export default StationsList;

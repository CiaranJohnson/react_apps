import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place,i) => (
        <ListItem 
        key={i} 
        placeName={place} 
        onItemPressed={() => props.onItemDeleted(i)}
        />
      ));
      return (
          <View style = {styles.listContainer}>{placesOutput}</View>
      )
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#eee"
    },
    listContainer: {
        width: "100%",
      },
});

export default placeList;
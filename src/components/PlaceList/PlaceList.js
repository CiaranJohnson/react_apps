import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';
import { isTemplateElement } from '@babel/types';

const placeList = props => {


      return (
          <FlatList style = {styles.listContainer}
          data = {props.places}
          renderItem={(info) => (
            <ListItem 
                placeName={info.item.name} 
                placeImage = {info.item.image}
                onItemPressed={() => props.onItemDeleted(info.item.key)}
            />
          )}
          />
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
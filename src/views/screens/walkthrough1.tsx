import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { constants } from '../../constants';

const Walkthrough1 = () => {
  const ITEM_WIDTH = 120;
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          width: ITEM_WIDTH,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Image
          source={item}
          style={{
            width: 110,
            height: 110,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor:'red'}}>
      <FlatList
        data={constants.walkthrough_01_01_images}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

export default Walkthrough1;

import React, { useRef, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { constants } from '../../constants';
import styles from '../styles/walkthrough1Style';

const Walkthrough1 = () => {
  const ITEM_WIDTH = 100;
  const [rowImages, setRowImages] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);

  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  
  const flatListRef = useRef<FlatList>(null);
  const flatListRefs = useRef<FlatList>(null);

  const scrollFlatList = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  const scrollFlatLists = (index: number) => {
    flatListRefs.current?.scrollToIndex({ animated: true, index });
  };

  let currentIndex = 0;
  setInterval(() => {
    scrollFlatList(currentIndex);
    currentIndex = (currentIndex + 1) % rowImages.length;
  }, 2000);

  setInterval(() => {
    scrollFlatLists(currentIndex);
    currentIndex = (currentIndex + 1) % row2Images.length;
  }, 2000);

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
            width: 93,
            height: 93,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={rowImages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.flatlistStyle}
      />
      <FlatList
        ref={flatListRefs}
        data={row2Images}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default Walkthrough1;

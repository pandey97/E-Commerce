import React, {useEffect, useState} from 'react';
import {View, Image, FlatList} from 'react-native';

import {SIZES, constants} from '../../constants';

const ITEM_WIDTH = 120;

const WalkThrough1 = () => {
  const [rowImages, setRowImages] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);

  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [row2CurrentPosition, setRow2CurrentPosition] = useState(0);

  const row1FlatListRef = React.useRef<FlatList>(null);
  const row2FlatListRef = React.useRef<FlatList>(null);

    // useEffect(() => {
    //   let positionTimer: number;

    //   const timer = () => {
    //     positionTimer = setTimeout(() => {
    //       // slider 1
    //       setCurrentPosition(prevPosition => {
    //         const position = Number(prevPosition) + 1;
    //         row1FlatListRef?.current?.scrollToOffset({
    //           offset: position,
    //           animated: false,
    //         });

    //         const maxOffset =
    //           constants.walkthrough_01_01_images.length * ITEM_WIDTH;

    //         if (prevPosition > maxOffset) {
    //           const offset = prevPosition - maxOffset;

    //           row1FlatListRef?.current?.scrollToOffset({
    //             offset,
    //             animated: false,
    //           });
    //           return offset;
    //         } else {
    //           return position;
    //         }
    //       });

    //       //slider 2
    //       setRow2CurrentPosition(prevPosition => {
    //         const position = Number(prevPosition) + 1;
    //         row2FlatListRef?.current?.scrollToOffset({
    //           offset: position,
    //           animated: false,
    //         });

    //         const maxOffset =
    //           constants.walkthrough_01_02_images.length * ITEM_WIDTH;

    //         if (prevPosition > maxOffset) {
    //           const offset = prevPosition - maxOffset;

    //           row1FlatListRef?.current?.scrollToOffset({
    //             offset,
    //             animated: false,
    //           });
    //           return offset;
    //         } else {
    //           return position;
    //         }
    //       });
    //       timer();
    //     }, 32);
    //   };
    //   timer();
    //   return () => {
    //     clearTimeout(positionTimer);
    //   };
    // }, []);

  return (
    <View>
      <FlatList
        ref={row1FlatListRef}
        data={rowImages}
        decelerationRate="fast"
        horizontal
        scrollEnabled={false} 
        showsHorizontalScrollIndicator={false}
        // listkey="Slider1"
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
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
        }}
      />
      <FlatList
        ref={row2FlatListRef}
        data={row2Images}
        decelerationRate="fast"
        style={{
          marginTop: SIZES.padding,
          transform: [{rotate: '180deg'}],
        }}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        // listkey="Slider2"
        keyExtractor={(_, index) => `Slider2_${index}`}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{rotate: '180deg'}],
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
        }}
      />
    </View>
  );
};

export default WalkThrough1;

import React,{useState, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES, constants} from '../../constants';
import WalkThrough1 from './walkthrough1';
import WalkThrough2 from './walkthrough2';

const WalkThrough = () => {

  const [walkthrough2Animated, setWalkthrough2Animated] = useState(false)

  // const onViewChangeRef = useRef(({viewableItems, changed}) =>{
  //   console.log(viewableItems);
  //   if(viewableItems[0].index == 1){
  //     setWalkthrough2Animated(true)
  //   }
  // })

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}>
        <Dots />
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              flex: 1,
              alignItems: 'center',
              backgroundColor: COLORS.lightGrey,
              marginRight: 20,
              padding: 15,
              borderRadius: 10,
            }}>
            <Text style={{color:COLORS.primary}}>{constants.constantText.joinnow}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              flex: 1,
              alignItems: 'center',
              backgroundColor: COLORS.primary,
              padding: 15,
              borderRadius: 10,
            }}>
            <Text style={{color:COLORS.light}}>{constants.constantText.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        // onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
              }}>
              {/* Walkthrough Images */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                {index == 0 && <WalkThrough1 />}
              </View>

              {/* Title & Description */}
              <View
                style={{
                  height: SIZES.height * 0.35,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text style={{...FONTS.h1}}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    ...FONTS.body3,
                    color: COLORS.grey,
                  }}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

export default WalkThrough;

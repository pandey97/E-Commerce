import React, {useState} from 'react';
import {View, Dimensions, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/walkthroughStyle';
import {COLORS, SIZES, constants} from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Walkthrough: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}></View>
      <View style={styles.lowerContainer}>
        <FlatList
          data={constants.walkthrough}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={({item, index}) => {
            return (
              <View style={{width: windowWidth}}>
                <Text style={styles.HeaderText}>{item.title}</Text>
                <Text style={styles.HeaderSubtitle}>{item.sub_title}</Text>
              </View>
            );
          }}
        />
        <View style={styles.dotContainer}>
          {constants.walkthrough.map((item, index) => (
            <View
              key={item.id}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        <View
          style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.leftButton}>
            <Text style={{color:COLORS.primary}}>{constants.constantText.joinnow}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightButton}>
            <Text style={{color:COLORS.light}}>{constants.constantText.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Walkthrough;

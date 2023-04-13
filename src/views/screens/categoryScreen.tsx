import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/categoryScreenStyle';
import {COLORS, constants, icons} from '../../constants';

const Category = () => {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (button: any) => {
    setActiveHeader(button);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeftItem}>
            <Image source={icons.logo} style={styles.logo} />
            <Text style={styles.categoryText}>
              {constants.constantText.home}
            </Text>
          </View>
          <View style={styles.headerRightItem}>
            <TouchableOpacity>
              <Image source={icons.filter} style={styles.rightHeaderLogo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.shoppingCart}
                style={styles.rightHeaderLogo}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryHeader}>
          <TouchableOpacity onPress={() => handleHeaderClick(1)}>
            <Text
              style={[
                styles.categoryChoiceText,
                {
                  color: activeHeader === 1 ? COLORS.dark : COLORS.grey,
                },
              ]}>
              {constants.constantText.general}
            </Text>
            {activeHeader === 1 ? <View style={styles.headerBar}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleHeaderClick(2)}>
            <Text
              style={[
                styles.categoryChoiceText,
                {
                  color: activeHeader === 2 ? COLORS.dark : COLORS.grey,
                },
              ]}>
              {constants.constantText.collection}
            </Text>
            {activeHeader === 2 ? <View style={styles.headerBar}></View> : null}
          </TouchableOpacity>
        </View>
      </View>
      {activeHeader === 1 ? 
      <View style={styles.lowerContainer}>
        <View style={styles.box}>

        </View>
      </View> : null}
    </View>
  );
};

export default Category;

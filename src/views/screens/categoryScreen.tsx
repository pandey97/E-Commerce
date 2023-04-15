import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../styles/categoryScreenStyle';
import {COLORS, constants, dummyData, icons, images} from '../../constants';

const Category = () => {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (button: any) => {
    setActiveHeader(button);
  };
  const colors = [
    COLORS.primary,
    COLORS.support2,
    COLORS.success,
    COLORS.secondary,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeftItem}>
            <Image source={icons.logo} style={styles.logo} />
            <Text style={styles.categoryText}>
              {constants.constantText.category}
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
      {activeHeader === 1 ? (
        <ScrollView
          style={styles.lowerContainer}
          showsVerticalScrollIndicator={false}>
          {dummyData.categories.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.box,
                {backgroundColor: dummyData.categories[index].bg_color},
              ]}>
              <Text style={[styles.genderText, {color: colors[index]}]}>
                {dummyData.categories[index].name}
              </Text>
              <Text style={styles.noOfProductText}>
                {dummyData.categories[index].qty}
              </Text>
              <View style={styles.imageStyle}>
                <Image
                  source={dummyData.categories[index].image_1}
                  style={styles.image}
                />
                <Image
                  source={dummyData.categories[index].image_2}
                  style={styles.image}
                />
                <Image
                  source={dummyData.categories[index].image_3}
                  style={styles.image}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : null}
      {activeHeader === 2 ? (
        <View>
          <View>
            <View></View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Category;

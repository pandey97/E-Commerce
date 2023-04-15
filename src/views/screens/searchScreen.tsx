import React from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles/searchScreenStyle';
import {constants, dummyData, icons} from '../../constants';

interface prop {
    navigation: any
}

const SearchScreen:React.FC<prop> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.arrow_left} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{constants.constantText.search}</Text>
        </View>
        <TouchableOpacity>
        <Image source={icons.filter} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          placeholder={constants.constantText.searchProduct}
          style={styles.input}
        />
        <Image source={icons.search} style={styles.leftInputIcon} />
        <TouchableOpacity style={styles.cameraTouchable}>
          <Image source={icons.camera} style={[styles.rightInputIcon]} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.lowertContainer} showsVerticalScrollIndicator={false}>
        <Image
          source={dummyData.featuredProducts[0].image}
          style={styles.poster}
        />
        <Text style={styles.featuredText}>
          {constants.constantText.featured}
        </Text>
        <Text style={styles.uptoText}>{constants.constantText.upto}</Text>
        <View style={styles.searchHeader}>
          <Text style={styles.topKeyText}>{constants.constantText.topKey}</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>
              {constants.constantText.seemore}
            </Text>
          </TouchableOpacity>
        </View>
        {dummyData.topSearch.map((item,index) => (
          <TouchableOpacity key={item.id} style={styles.topKeyContainer}>
            <View style={styles.leftContent}>
              <Image
                source={dummyData.topSearch[index].image}
                style={styles.image}
              />
              <Text style={styles.dummyDataText}>
                {dummyData.topSearch[index].keyword}
              </Text>
            </View>
            <View style={styles.rightContent}>
              <Text style={styles.noOfProductText}>
                ({dummyData.topSearch[index].result})
              </Text>
              <Image source={icons.arrow_right_up} style={styles.rightUp} />
            </View>
          </TouchableOpacity>
        ))}
        <Text style={styles.suggestedText}>{constants.constantText.suggested}</Text>
        <View style={styles.suggestedContainer}>
        {dummyData.suggestedSearch.map((item,index) =>
            <TouchableOpacity key={item.id} style={styles.suggestedItemContainer}>
            <Text style={styles.text}>{dummyData.suggestedSearch[index].keyword}</Text>
            </TouchableOpacity>
        )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

import React from 'react';
import {Image, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {COLORS, constants, icons} from '../../constants';
import styles from '../styles/forgotPasswordStyle';
import CommonButton from '../../components/Button';

interface props {
    navigation: any
}

const ForgotPassword: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View>
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.arrow_left} style={styles.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {constants.constantText.forgotPassword}
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.continuePhonenoText}>
          {constants.constantText.continuePhoneno}
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder={constants.constantText.phone}
            placeholderTextColor={COLORS.grey60}
          />
          <Image source={icons.phone} style={[styles.Icon, styles.left]} />
        </View>
      </View>
      </View>
      <CommonButton text={constants.constantText.sendCode}/>
    </View>
  );
};

export default ForgotPassword;

import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {images, constants} from '../../constants';
import styles from '../styles/welcomeScreenStyle';
import CommonButton from '../../components/Button';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={images.logo} style={styles.image} />
        <Text style={styles.upperContainertext}>
          {constants.constantText.WelcomeTo}
        </Text>
        <Text style={styles.upperContainertext}>
          {constants.constantText.Margaret}
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <CommonButton text={constants.constantText.GetStarted} />
        <Text style={styles.lowerContainerText}>
          {constants.constantText.AlreadyAccount}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

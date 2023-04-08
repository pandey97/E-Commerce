import React from 'react';
import {Image, Text, TextInput, TouchableOpacity,ScrollView, View} from 'react-native';
import {COLORS, constants, icons, images} from '../../constants';
import styles from '../styles/signInScreenStyle';
import CommonButton from '../../components/Button';

interface props {
  navigation: any
}

const SignIn: React.FC<props> = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logoImage} />
      <View style={styles.box}>
        <Text style={styles.boxHeaderText}>
          {constants.constantText.signInToContinue}
        </Text>
        <View style={styles.boxTextInput}>
          <View>
            <Image source={icons.email} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.email}
              placeholderTextColor={COLORS.grey60}
            />
          </View>
          <View>
            <Image source={icons.lock} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.password}
              placeholderTextColor={COLORS.grey60}
            />
            <Image source={icons.eye} style={[styles.Icon, styles.right]} />
          </View>
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>
              {constants.constantText.forgotpassword}
            </Text>
          </TouchableOpacity>
        </View>
        <CommonButton text={constants.constantText.login} />
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.dontHaveAccountText}>
          {constants.constantText.dontHaveAccount}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.newAccountText}>
          {constants.constantText.newAccount}
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}>
        <Text>{constants.constantText.loginWith}</Text>
        <View style={styles.socialNetworkImage}>
          <View style={styles.backgroundDesign}>
            <Image source={icons.twitter} style={styles.socialNetworkIcon} />
          </View>
          <View style={styles.backgroundDesign}>
            <Image source={icons.google} style={styles.socialNetworkIcon} />
          </View>
          <View style={styles.backgroundDesign}>
            <Image source={icons.linkedin} style={styles.socialNetworkIcon} />
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default SignIn;

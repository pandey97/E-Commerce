import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, constants, icons, images} from '../../constants';
import CommonButton from '../../components/Button';
import styles from '../styles/signUpScreenStyle';
import CheckBox from '@react-native-community/checkbox';
import CountryPickers from '../../components/countryPicker';

interface props {
  navigation: any;
}

const SignUp: React.FC<props> = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState('');

  const onCountrySelect = (country: any) => {
    setCountry(country.name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logoImage} />
      <View style={styles.box}>
        <Text style={styles.boxHeaderText}>
          {constants.constantText.createNewAccount}
        </Text>
        <View style={styles.boxTextInput}>
          <View>
            <Image source={icons.person} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.name}
              placeholderTextColor={COLORS.grey60}
            />
          </View>
          <View>
            <Image source={icons.email} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.email}
              placeholderTextColor={COLORS.grey60}
            />
          </View>
          <View>
            <Image source={icons.phone} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.phone}
              placeholderTextColor={COLORS.grey60}
            />
          </View>
          <View>
            <TextInput
              style={[styles.input, {paddingHorizontal: 10}]}
              placeholder={constants.constantText.country}
              placeholderTextColor={COLORS.grey60}
              editable={false}
              value={country}
              onChangeText={(text) => setCountry(text)}
              onFocus={() => setModalVisible(true)}
            />
            <Modal visible={modalVisible} animationType='slide'>
              <CountryPickers 
                withFlag = {true}
                onSelect={onCountrySelect}

              />
            </Modal>
            <TouchableOpacity style={styles.eye}  onPress={()=> setModalVisible(true)}>
              <Image
                source={icons.arrow_down_fill}
                style={[styles.Icon, styles.right]}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image source={icons.lock} style={[styles.Icon, styles.left]} />
            <TextInput
              style={styles.input}
              placeholder={constants.constantText.password}
              placeholderTextColor={COLORS.grey60}
              secureTextEntry={!passwordVisible}
            />
            {passwordVisible ? (
              <TouchableOpacity
                onPress={() => setPasswordVisible(false)}
                style={styles.eye}>
                <Image source={icons.eye} style={[styles.Icon, styles.right]} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setPasswordVisible(true)}
                style={styles.eye}>
                <Image
                  source={icons.eye_off}
                  style={[styles.Icon, styles.right]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.checkboxLine}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.termAndConditionText}>
                {constants.constantText.termAndCondition}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CommonButton text={constants.constantText.createAccount} />
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.dontHaveAccountText}>
          {constants.constantText.alreadyHaveAccount}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.newAccountText}>
            {constants.constantText.signin}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

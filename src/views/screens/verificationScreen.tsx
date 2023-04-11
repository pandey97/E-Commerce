import React, { useRef } from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/verificationScreenStyle';
import {COLORS, constants, icons} from '../../constants';

interface props {
  navigation: any;
}

const Verification: React.FC<props> = ({navigation}) => {

    const inputs = useRef<Array<TextInput>>([]);
    const focusNextInput = (index:number) => {
        if (inputs.current[index + 1]) {
          inputs.current[index + 1].focus();
        }
      };
    
      const handleInput = (index:number, value:string) => {
        if (value.length === 1) {
          focusNextInput(index);
        }
      };

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
            {constants.constantText.OTPsent}
          </Text>
          <View style={styles.otpContainer}>
            <TextInput
            ref={(input) => {
                inputs.current[0] = input!;
              }}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInput(0, value)}
            />
            <TextInput
            ref={(input) => {
                inputs.current[1] = input!;
              }}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInput(1, value)}
            />
            <TextInput
            ref={(input) => {
                inputs.current[2] = input!; //non-null assertion operator
              }}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInput(2, value)}
            />
            <TextInput
            ref={(input) => {
                inputs.current[3] = input!;
              }}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInput(3, value)}
            />
          </View>
          <TouchableOpacity>
          <Text style={styles.resendText}>{constants.constantText.resend}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Verification;

import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';

interface ButtonProps {
  onPress?: () => void;
  text?: string;
}

const CommonButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});

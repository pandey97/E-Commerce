import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

interface props {
    progress: number
}

const ProgressScreen: React.FC<props> = ({progress}) => {

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 13,
    marginTop:5,
    backgroundColor: COLORS.grey20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.error,
    borderRadius: 5,
  },
});

export default ProgressScreen;

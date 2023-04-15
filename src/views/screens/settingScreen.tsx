import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import styles from '../styles/settingScreenStyle';
import { COLORS, constants, icons } from '../../constants';

interface ToggleButtonProps {
    initialValue: boolean;
  };

const ToggleButton: React.FC<ToggleButtonProps> = ({initialValue }) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
    return (
        <Switch
          trackColor={{ false: COLORS.grey, true: COLORS.secondary }}
          thumbColor={isEnabled ? COLORS.primary : COLORS.light}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    );
  };

const Setting = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                <Image source={icons.arrow_left} style={styles.logo}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{constants.constantText.setting}</Text>
            </View>
            <View style={styles.imageContainer}>
            <View style={styles.settingImageContainer}>
            <Image source={require('../../assets/icons/setting.png')} style={styles.settingImage}/>
            </View>
            </View>
            <View style={styles.box}>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.notification}</Text>
                    <ToggleButton initialValue={false} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.askBeforeBuy}</Text>
                    <ToggleButton initialValue={false} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.colorBlind}</Text>
                    <ToggleButton initialValue={false} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.setupWidth}</Text>
                    <ToggleButton initialValue={false} />
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.notification}</Text>
                    <ToggleButton initialValue={false} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.askBeforeBuy}</Text>
                    <ToggleButton initialValue={false} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.text}>{constants.constantText.colorBlind}</Text>
                    <ToggleButton initialValue={false} />
                </View>
            </View>
        </View>
    )
}

export default Setting;
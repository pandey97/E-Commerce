import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';

interface props {
    withFlag?: boolean,
    withCallingCodeButton?: boolean
    withCallingCode?: boolean
    onSelect?: any;
    countryCode?: any;
}
const CountryPickers: React.FC<props> = (props) => {
  return (
    <CountryPicker
      countryCode={props.countryCode}
      withFlag={props.withFlag}
      withCallingCodeButton={props.withCallingCodeButton}
      withCallingCode={props.withCallingCode}
      onSelect={props.onSelect}
    />
  );
};

export default CountryPickers;

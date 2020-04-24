import React from 'react';

import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';

class LanguagesPicker extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {selectedValue, setSelectedValue, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: -5,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#003f5c' : '#cc222a',
    };
    return (
      <Picker
        {...props}
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="İngilizce" value="en" />
        <Picker.Item label="Türkçe" value="tr" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 0,
    justifyContent: 'center',
  },
});

export default LanguagesPicker;

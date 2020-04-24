import React from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';

class FloatingLabelInput extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {label, value, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: -5,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#003f5c' : '#cc222a',
    };
    return (
      <View style={styles.inputView}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{
            height: 50,
            fontSize: 20,
            color: '#000',
            borderBottomWidth: 2,
            borderBottomColor: !isFocused ? '#555' : '#cc222a',
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
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

export default FloatingLabelInput;

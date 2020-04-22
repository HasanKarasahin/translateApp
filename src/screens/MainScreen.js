import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class MainScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.headerArea}>
            <Text style={styles.headerTitle}> Translator </Text>
          </View>
          <View style={styles.inputTargetArea}>
            <TextInput
              style={styles.inputTargetText}
              numberOfLines={50}
              multiline={true}
            />
          </View>
          <View style={styles.options}>
            <View style={styles.optionTargetLanguages} />
            <View style={styles.optionButton} />
            <View style={styles.optionResultLanguages} />
          </View>
          <View style={styles.inputResultArea} />
          <View style={styles.translateButton} />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20,
  },
  headerArea: {
    flex: 0.5,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputTargetArea: {
    flex: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    width: '100%',
  },
  inputTargetText: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    shadowColor: 'black',
    borderRadius: 10,
    fontSize: 20,
  },
  options: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginBottom: 5,
    width: '100%',
  },
  optionTargetLanguages: {
    flex: 2,
    backgroundColor: 'black',
  },
  optionButton: {
    flex: 2,
    backgroundColor: 'red',
  },
  optionResultLanguages: {
    flex: 2,
    backgroundColor: 'purple',
  },
  inputResultArea: {
    flex: 2,
    backgroundColor: 'orange',
    marginBottom: 5,
    width: '100%',
  },
  picker: {},
  translateButton: {
    flex: 0.5,
    backgroundColor: 'purple',
    width: '100%',
  },
});

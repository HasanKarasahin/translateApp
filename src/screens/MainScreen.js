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
  Button,
  Image,
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
            <TextInput style={styles.inputTargetText} />
          </View>
          <View style={styles.options}>
            <View style={styles.optionTargetLanguages}>
              <Picker style={styles.picker}>
                <Picker.Item label="Türkçe" value="tr" />
                <Picker.Item label="İngilizce" value="ing" />
              </Picker>
            </View>
            <View style={styles.optionButton}>
              <Button title="Degiş" color="red" />
            </View>
            <View style={styles.optionResultLanguages}>
              <Picker style={styles.picker}>
                <Picker.Item label="İngilizce" value="ing" />
                <Picker.Item label="Türkçe" value="tr" />
              </Picker>
            </View>
          </View>
          <View style={styles.inputResultArea}>
            <TextInput style={styles.inputResultText} />
          </View>
          <View style={styles.footer}>
            <Button title="Çevir" style={styles.translateButton} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 15,
    elevation: 10,
    padding: 10,
  },
  inputTargetText: {
    flex: 1,
    width: '100%',
    shadowColor: 'black',
    borderRadius: 10,
    fontSize: 20,
  },
  options: {
    flex: 0.5,
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
  },
  optionTargetLanguages: {
    flex: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
    padding: 2,
  },
  optionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  optionBtn: {
    flex: 1,
  },
  optionResultLanguages: {
    flex: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
    padding: 2,
  },
  inputResultArea: {
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 15,
    elevation: 10,
    padding: 10,
  },
  inputResultText: {
    flex: 1,
    width: '100%',
    shadowColor: 'black',
    borderRadius: 10,
    fontSize: 20,
  },
  picker: {},
  footer: {
    flex: 0.5,
    width: '100%',

    marginLeft:20,
    marginRight:20
  },
  translateButton:{
  }
});

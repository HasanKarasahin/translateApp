import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Picker,
  Button,
  Image,
  Alert,
} from 'react-native';

let mainScreen;
export default mainScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [targetText, seTargetText] = useState('');
  const [resultText, seResultText] = useState('');
  const [data, setData] = useState([]);

  function translate(targetTextParam = 'Merhaba') {
    seTargetText(targetTextParam);
    fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T083125Z.b362de9c454666ad.59cc6590f658ccc90dcbe1cdf37b6500ab04c529&text=${targetTextParam}&lang=en`,
    )
      .then((response) => response.json())
      .then((json) => seResultText(json.text ? json.text[0] : ''))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

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
            value={targetText}
            onChangeText={(text) => translate(text)}
            placeholder="Type here to translate!"
          />
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
          <TextInput
            style={styles.inputResultText}
            value={resultText}
            onChangeText={(text) => seResultText(text)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 10,
  },
  headerArea: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputTargetArea: {
    flex: 3,
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
    flex: 1,
    flexDirection: 'row',
  },
  optionTargetLanguages: {
    flex: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 5,
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
    justifyContent: 'center',
    marginBottom: 5,
    borderRadius: 10,
    elevation: 5,
  },
  inputResultArea: {
    flex: 3,
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
});

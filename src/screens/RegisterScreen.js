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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const state = {
  email: '',
  password: '',
};

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              style={styles.imageBackground}
              source={require('./header.png')}>
              <Text style={styles.text}>Kayıt</Text>
            </ImageBackground>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Kullanıcı Adı"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({email: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Şifre"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({email: text})}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Üye olmak için tıklayın</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                alert('You tapped the button!');
              }}>
              <Text style={styles.loginText}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderColor: '#000000',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
    fontSize: 18,
  },
  forgot: {
    color: '#000',
    fontSize: 15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  header: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
//export default LoginScreen;

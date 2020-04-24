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

import FloatingLabelInput from '../components/FloatingLabelInput';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    value: '',
  };

  handleEmailTextChange = (newText) => this.setState({email: newText});
  handlePassordTextChange = (newText) => this.setState({password: newText});

  render(navigation) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              style={styles.imageBackground}
              source={require('./header.png')}>
              <Text style={styles.text}>Giriş</Text>
            </ImageBackground>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.inputView}>
              <FloatingLabelInput
                label="Kullanıcı Adı"
                value={this.state.email}
                onChangeText={this.handleEmailTextChange}
              />
            </View>
            <View style={styles.inputView}>
              <FloatingLabelInput
                label="Şifre"
                value={this.state.password}
                onChangeText={this.handlePassordTextChange}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}>
              <Text style={styles.forgot}>Üye olmak için tıklayın</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.props.navigation.navigate('MainScreen');
              }}>
              <Text style={styles.loginText}>Giriş</Text>
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
    marginBottom: 20,
    justifyContent: 'center',
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
    backgroundColor: '#DA17FF',
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

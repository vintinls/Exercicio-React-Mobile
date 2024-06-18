import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Button from '../../components/Button/Button';
import styles from './style';

const logo = require('./../../../assets/logoNetflix.png'); 

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>
      <TextInput placeholder="Usuário" placeholderTextColor="#888" style={styles.input} />
      <TextInput placeholder="Senha" placeholderTextColor="#888" secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Login;

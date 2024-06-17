import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/Button/Button';
import styles from './style';

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Login</Text>
      <TextInput placeholder="Usuário" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Login;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Página Home" />
      <Text style={styles.welcome}>Voce entrou na pagina Home s2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Home;

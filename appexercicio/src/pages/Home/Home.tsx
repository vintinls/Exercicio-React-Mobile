import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import styles from './style';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Página Home" />
      <Text style={styles.welcome}>Você entrou na página Home s2</Text>
    </View>
  );
};

export default Home;

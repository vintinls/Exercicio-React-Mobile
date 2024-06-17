import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

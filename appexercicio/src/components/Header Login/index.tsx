import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Header2: React.FC<{ title: string }> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

    </View>
  );
};

export default Header2;

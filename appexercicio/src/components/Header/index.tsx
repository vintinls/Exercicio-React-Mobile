import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Header: React.FC<{ title: string }> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <Image source={require('./../../../assets/logoNetflix.png')} style={styles.logo} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

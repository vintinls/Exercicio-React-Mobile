import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Button: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

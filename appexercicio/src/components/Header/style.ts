import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'red', // Texto preto
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 100,  
    height: 40, 
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    color: 'red',
    fontSize: 18,
  },
});

export default styles;

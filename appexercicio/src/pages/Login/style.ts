import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black', 
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    alignSelf: 'flex-start', 
    color: 'white', 
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#333',
    marginBottom: 10,
    paddingLeft: 8,
    color: 'white', 
  },
});

export default styles;

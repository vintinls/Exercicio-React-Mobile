import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#171717',
  },
  card: {
    width: 150,
    height: 225,
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  screen: {
    flex: 1,
    
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'bold'
  },
});

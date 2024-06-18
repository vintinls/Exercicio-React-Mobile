import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Header from './src/components/Header/index'; // Ajuste o caminho conforme necessário
import Header2 from './src/components/Header Login';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ navigation, route }) => ({
          header: () => getHeaderComponent(route), // Função para retornar o componente de header correto
        })}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Função para retornar o componente de header com base na rota
const getHeaderComponent = (route: any) => {
  switch (route.name) {
    case 'Login':
      return <Header2 title="" />;
    case 'Home':
      return <Header title="Home" />;
    default:
      return <Header title="Default" />;
  }
};

export default App;

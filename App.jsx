import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import HeroesScreen from './src/Screens/HeroesScreen';
import HeroeDetailsScreen from './src/Screens/HeroeDetailsScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen /> */}
      <HeroesScreen />
      {/* <HeroeDetailsScreen /> */}
    </NavigationContainer>
  );
}

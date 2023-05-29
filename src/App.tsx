import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './pages/Login/LoginScreen';
import ChooseIdiomScreen from './pages/ChoseIdiom/ChooseIdiomScreen';
import HomeScreen from './pages/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Choose Idiom" screenOptions={{ headerShown:false}}>
        <Stack.Screen name='Choose Idiom' component={ChooseIdiomScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


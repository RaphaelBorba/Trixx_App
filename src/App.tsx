import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './pages/Login/LoginScreen';
import ChooseIdiomScreen from './pages/ChoseIdiom/ChooseIdiomScreen';
import HomeScreen from './pages/Home/HomeScreen';
import SignUpScreen from './pages/SignUp/SignUpScreen';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
})

if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Choose Idiom" screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Choose Idiom' component={ChooseIdiomScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Sign Up' component={SignUpScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


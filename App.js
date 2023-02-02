import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';
// components import 
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ 
                headerShown: false, 
              }} 
            />
            <Stack.Screen 
              name="Restaurant" 
              component={RestaurantScreen} 
              options={{ 
                headerShown: false, 
              }} 
            />
            <Stack.Screen 
              name="Cart" 
              component={CartScreen} 
              options={{ 
                headerShown: false, 
                presentation: 'modal',
                gestureDirection: "horizontal",
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }} 
            />
            <Stack.Screen 
              name="PreparingOrder" 
              component={PreparingOrderScreen} 
              options={{ 
                headerShown: false, 
              }} 
            />
            <Stack.Screen 
              name="Delivery" 
              component={DeliveryScreen} 
              options={{ 
                headerShown: false, 
                presentation: 'fullScreenModal',
                gestureDirection: "horizontal",
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

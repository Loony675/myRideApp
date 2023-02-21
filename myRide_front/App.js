import { StyleSheet, Text, View } from "react-native";
//Bibliothèque Fontwesome
import FontAwesome from "react-native-vector-icons/FontAwesome";

//Import des screens
import HomeScreen from "./screens/HomeScreen";
import PresentationScreen from "./screens/PresentationScreen";
import MainScreen from './screens/MainScreen'
//Import redux
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const store = configureStore({
//   reducer: { users, url, isVisible, position, trajets },
// });

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "Main") {
            iconName = "home";
          } else if (route.name === "Tchat") {
            iconName = "envelope";
          } else if (route.name === "Presentation") {
            iconName = "desktop";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#61BEFF",
        tabBarInactiveTintColor: "#335561",
        headerShown: false,
        tabBarStyle: { backgroundColor: "black" },
      })}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name='Presentation' component={PresentationScreen}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />

          <Stack.Screen name="Presentation" component={PresentationScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  containerTabNav: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

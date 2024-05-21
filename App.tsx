import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Colors from "./constants/Colors";
import Home from "./screens/Home";
import Counter from "./screens/Counter";
import HexColorPicker from "./screens/HexColorPicker";
import Todo from "./screens/Todo";
import Calculator from "./screens/Calculator";
import Contact from "./screens/Contact";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: Colors.navBg,
            },
            drawerActiveTintColor: Colors.navText,
            drawerInactiveTintColor: Colors.navText,
            headerStyle: { backgroundColor: Colors.navBg },
            headerTintColor: Colors.navText,
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Counter" component={Counter} />
          <Drawer.Screen name="Hex Color Picker" component={HexColorPicker} />
          <Drawer.Screen name="Todo" component={Todo} />
          <Drawer.Screen name="Calculator" component={Calculator} />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

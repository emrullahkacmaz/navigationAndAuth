import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from "./src/Home";
import Login from "./src/Login";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Tab1 from "./src/tabs/tab1";
import Tab2 from "./src/tabs/tab2";
import Tab3 from "./src/tabs/tab3";

const Tab = createMaterialBottomTabNavigator();
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  createTabbedPage = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
      </Tab.Navigator>
    );
  };

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" children={this.createTabbedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

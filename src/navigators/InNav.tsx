import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detail from "../screens/Detail";
import Home from "../screens/Home";
import { BLACK_COLOR } from "../types/colors";

const Nav = createNativeStackNavigator();

const InNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerTintColor: "white",

        headerStyle: {
          backgroundColor: BLACK_COLOR,
        },
        contentStyle: {
          backgroundColor: BLACK_COLOR,
        },
      }}
    >
      <Nav.Screen
        name={"Home"}
        component={Home}
        options={{
          headerTitle: "코인",
        }}
      />
      <Nav.Screen
        name={"Detail"}
        component={Detail}
        options={{
          presentation: "modal",
        }}
      />
    </Nav.Navigator>
  );
};

export default InNav;

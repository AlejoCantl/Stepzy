import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: "#0AC1CB",
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              flex: 1,
              marginBottom: -2,
              marginTop: -15,
            }}
          />
        ),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderColor: "white",
          shadowColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={35} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={35} name="folder.circle.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={35} name="chart.bar.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

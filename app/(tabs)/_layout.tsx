import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name='about'
        options={{ title: 'About' }}
      />
      <Tabs.Screen
        name='profile'
        options={{ title: 'Profile' }}
      />
      <Tabs.Screen
        name='summary'
        options={{ title: 'Summary' }}
      />
    </Tabs>
  );
};

export default TabsLayout;

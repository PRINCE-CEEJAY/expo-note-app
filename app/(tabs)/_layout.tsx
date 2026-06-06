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
        name='create-note'
        options={{ title: 'Create Note' }}
      />
      <Tabs.Screen
        name='notes'
        options={{ title: 'View Notes' }}
      />
      <Tabs.Screen
        name='settings'
        options={{ title: 'Settings' }}
      />
    </Tabs>
  );
};

export default TabsLayout;

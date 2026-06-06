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
        options={{ title: 'Create Note', headerTitle: 'Make a Nice Note' }}
      />
      <Tabs.Screen
        name='notes'
        options={{ title: 'Notes', headerTitle: 'All Stored Notes' }}
      />
      <Tabs.Screen
        name='settings'
        options={{ title: 'Settings', headerTitle: 'App Settings' }}
      />
    </Tabs>
  );
};

export default TabsLayout;

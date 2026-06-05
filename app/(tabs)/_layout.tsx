import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name='explore'
        options={{ title: 'Explore' }}
      />
      <Tabs.Screen
        name='about'
        options={{ title: 'About' }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});

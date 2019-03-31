// import React from 'react';
// import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import meterList from './src/components/MeterList/MeterList';



const TabNavigator = createBottomTabNavigator({
  Home: Main,
  MeterList: meterList,
  Map: meterList
});

export default createAppContainer(TabNavigator);
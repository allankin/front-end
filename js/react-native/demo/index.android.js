/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//import Container from './components/Container';
//import Header from './components/Header';
//import BeautyFlashing from './components/BeautyFlashing';
//import LoginPage from './components/LoginPage';
//import MyTextListView from './components/MyTextListView';

//import NetWorkTextListView from './components/NetWorkTextListView';
//import MyButton from './components/TappableComponent';
import FadeInViewWrapper from './components/FadeInView'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo', () => FadeInViewWrapper);

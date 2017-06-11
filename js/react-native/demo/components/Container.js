import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';

import BeautyFlashing from '/components/BeautyFlashing';

class Container extends Component{
  render(){
    return(
      <View style={styles.container}>
        <BeautyFlashing/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    flex:1
  }
});

export default Container;
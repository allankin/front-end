import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TouchableNativeFeedback,TouchableOpacity } from 'react-native';
class MyButton extends Component{
  onPressTouchableHighlightButton(){
    console.log('you tapped the TouchableHighlight button');
  }
  onPressTouchableNativeFeedback(){
    console.log('you tapped the TouchableNativeFeedback button');  
  }
  render(){
    return(
      <View>
        <TouchableHighlight onPress={this.onPressTouchableHighlightButton}>
          <Text style={{width:120,height:80}}>TouchableHighlight Button</Text>
        </TouchableHighlight>
          
        <TouchableNativeFeedback onPress={this.onPressTouchableNativeFeedback}>
          <Text style={{width:120,height:80}}>TouchableNativeFeedback Button</Text>
        </TouchableNativeFeedback>

        <TouchableOpacity>
          <Text style={{width:120,height:80}}>TouchableOpacity Button</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MyButton;
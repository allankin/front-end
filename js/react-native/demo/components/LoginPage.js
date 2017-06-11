import React,{Component} from 'react';
import {View,TextInput,Text,ScrollView} from 'react-native';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      "userName":"",
      "password":""
    };
  }

  render(){
    console.log(this.state);
    return(
      <ScrollView>
        <View style={{flexDirection:"column",justifyContent:"center"}}>
          <TextInput onChangeText={(userName)=>this.setState({userName})} placeholder="Input your UserName" style={{height:80}} />
          <TextInput onChangeText={(password)=>this.setState({password})} placeholder="Input your Password" style={{height:80}} />
            <Text>
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).
            00000000000000000000000000000000000000000000000000的
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default LoginPage;
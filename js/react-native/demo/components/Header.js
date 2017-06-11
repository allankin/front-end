import React,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';


class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        {/*<Text>{this.props.title}</Text>*/}
        <Text>sssssssss</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Header;
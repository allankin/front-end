import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import Header from 'Header';
/**
 * 美女闪烁控件
 */
class BeautyFlashing extends Component {
  constructor(props){
    super(props);
    this.images=[
      {
        "uri":'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1956701962,2419089140&fm=26&gp=0.jpg',
        "name":"美女1"
      },
      {
        "uri":"http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92137.jpg",
        "name":"美女2"
      }
    ];
    this.state={
      "image":this.images[0]
    };
  }

  componentDidMount(){
    console.log("componentDidMount .....");
    var ImageBlink = setInterval(function(){
      let date = new Date();
      console.log("images index:",date.getSeconds()%2,",seconds:",date.getSeconds());
      this.setState({
        "image":this.images[date.getSeconds()%2]
      });
    }.bind(this),1000);
  }

  render() {
    console.log(this.state.image);
    return (
      <View>
        <Header title="美女闪烁"/>
        <Image source={{uri:this.state.image.uri}} style={{width: 300, height: 300}}/>
        <Text>{this.state.image.name}</Text>
       
      </View>
    );
  }
}

export default BeautyFlashing;
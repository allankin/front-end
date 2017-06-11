import React,{Component} from 'react';
import {
  Text,
  Animated,
  Easing
} from 'react-native';

class FadeInView extends Component {
  constructor(props){
    super(props);
    this.state = {
      fadeAnim : new Animated.Value(0),
    }
  }

  componentDidMount(){
    console.log("componentDidMount..............");
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:1
      }
    ).start();
  }

  render(){
    return(
      <Animated.View style={{...this.props.style,opacity:this.state.fadeAnim,top:this.state.top,left:this.state.left}}>
        {this.props.children}
      </Animated.View>
    );
  }
}
//module.exports = FadeInView;
class FadeInViewWrapper extends Component{
  render(){
    return (
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    );
  }
}

export default FadeInViewWrapper;
import React,{Component} from 'react';
import {ListView,Text,View} from 'react-native';

class MyTextListView extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   dataSource:["Jhon","Tom","Jack","Jim"]
    // }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','A','B','C','D','E','F','G','H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U','V','W','X','Y','Z','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','A','B','C','D','E','F','G','H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U','V','W','X','Y','Z'
      ])
    };
  }

  render(){
    return (
      <View>
        <ListView dataSource={this.state.dataSource} renderRow={(rowData)=><Text>{rowData}</Text>}/>

      </View>
    );
  }
 
   
}

export default MyTextListView;
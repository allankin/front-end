import React,{Component} from 'react';
import {View,Text,ListView} from 'react-native';

class NetWorkTextListView extends Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state = {
      dataSource:this.ds.cloneWithRows([])
    } 
  }
  init(){
    var promise = fetch('https://facebook.github.io/react-native/movies.json');
     promise
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson.movies);
      this.setState({
        dataSource:this.ds.cloneWithRows(responseJson.movies)
      });
      return responseJson.movies;
    })
    .catch((error)=>{
      console.error(error);
    });
  }
  componentDidMount(){
    console.log('componentDidMount..........');
    this.init();
  }

  onRenderRow(rowData){
    return (
      <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:10,paddingRight:10}}>
        <Text>{rowData.title}</Text>
        <Text>{rowData.releaseYear}</Text>
      </View>
    );
  }

  render(){
    return (
      <View>
        <ListView dataSource={this.state.dataSource} renderRow={this.onRenderRow}/>
      </View>
    );
  }
}
export default NetWorkTextListView;
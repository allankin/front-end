//import React from 'react';
/**
 * ES6 class 风格
 */

class SearchBar extends React.Component {
  constructor() {
    super();
    this.searchTextOnChange = this.searchTextOnChange.bind(this);
  }
  searchTextOnChange(){
    console.log('searchTextOnChange....',this.refs.stocked.checked,this.refs.searchText.value);
    this.props.searchText = this.refs.searchText.value;
    this.props.stocked = this.refs.stocked.checked;
    this.props.onUserInput(this.refs.searchText.value,this.refs.stocked.checked);
  }
  render() {
    return (
      <div>
        <input name="searchText" type="text" ref="searchText" onChange={this.searchTextOnChange} placeholder="input to search" /> 
        <input type="checkbox" name="stocked" ref="stocked" onChange={this.searchTextOnChange} /> stocked?
      </div>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state={data:[]};
    //this.loadData();
  }
  loadData() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
        console.log("ajax success " + this.state.data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount(){
    console.log('componentDidMount....');
    this.loadData();
  }
  render() {
    var searchText = this.props.searchText;
    var stocked = this.props.stocked;
    console.log('ProductTable render.....searchText:',searchText,'stocked:',stocked);
    var list = this.state.data.map(function(entry){
      if(searchText){
        if(entry.name.indexOf(searchText) === -1){
          return false;
        }
      }
      if(stocked !== entry.stocked){
        return false;
      }
      return <li>{entry.name}&nbsp;&nbsp;&nbsp;&nbsp;{entry.price}</li>;
    });
    return (
      <ul>
        {list}
      </ul>
    );
  }

}

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', stocked: false };
  }
  handleUserInput(searchText, stocked) {
    console.log("SearchContainer handleUserInput ...",searchText,stocked);
    this.setState({
      searchText: searchText,
      stocked: stocked
    });
  }
  render() {
    console.log("SearchContainer render");
    return (
      <div>
        <SearchBar onUserInput={this.handleUserInput.bind(this)} searchText={this.state.searchText} stocked={this.state.stocked} />
        <ProductTable url="products.json" searchText={this.state.searchText} stocked={this.state.stocked} />
      </div>
    );
  }
}
ReactDOM.render(
  <SearchContainer />,
  document.getElementById('content')
);
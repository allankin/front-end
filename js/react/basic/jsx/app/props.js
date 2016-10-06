var DivSearchBar = React.createClass({
        searchBarTextOnchange:function(e){
          console.log("DivSearchBar searchBarTextOnchange:"+e.target.value);
          this.props.searchBarTextOnchange(e.target.value);
        },
        render:function(){
          return (
            <input onChange={this.searchBarTextOnchange} />
          );
        }
      });
      var DivSearchTextView = React.createClass({
        getInitialState:function(){
          return {data:this.props.searchText};
        },
        render:function(){
          console.log("DivSearchTextView render:"+this.props.searchText);
          return (
            <div>{this.props.searchText}</div>
          );
        }
      });   
      var DivParent = React.createClass({
        getInitialState:function(){
          return {searchText:this.props.searchText};
        },
        searchBarTextOnchange:function(text){
          console.log("DivParent searchBarTextOnchange:"+text);
          this.props.searchText = text;
          this.setState({searchText:text});
        },
        render:function(){
          return (
            <div>
              <div>this.state.searchText: {this.state.searchText}</div>
              <div>this.props.searchText:{this.props.searchText}</div>
              <DivSearchBar searchBarTextOnchange={this.searchBarTextOnchange}/>
              <DivSearchTextView searchText={this.state.searchText}/>
            </div>
          );
        }
      });
      ReactDOM.render(<DivParent searchText='111'/>,document.getElementById('content'));

class CommentForm extends React.Component{

  constructor(props){
    super(props);
    this.postComment = this.postComment.bind(this);
  }
  postComment(){
    var name = this.refs.name.value;
    var word = this.refs.word.value;
    console.log("postComment....name:"+name+",word:"+word);
    this.props.onPostComment(name,word);
  }
  render(){
    return (
      <div>
        <input name="name" type="text" placeholder="Your name" ref="name" /><br/>
        <input name="word" type="text" placeholder="Say something..." ref="word"/><br/>
        <input  type="button" value="Post" onClick={this.postComment}/>
      </div>
    );
  }
}

class Comment extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var name = this.props.name;
    var word = this.props.word;
    console.log("Comment render....name:"+name+",word:"+word);
    return (
      <li>
        {name} &nbsp;&nbsp;&nbsp;&nbsp;{word}
      </li>
    );
  }
}

class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.comments = [];
    this.state = {"comments":this.comments};
    this.loadData();
  }
  loadData(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(JSON.stringify(data));
        this.comments = data;
        this.setState({ "comments": this.comments });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  
  render(){
    var author = this.props.name;
    var text = this.props.word;
    if(author && text){
      this.comments.push({"author":author,"text":text});
    }
    console.log("CommentList render....author:"+author+",text:"+text+",comments size:"+this.comments.length);
    var commentList = [];
    this.state.comments.forEach(
      (item)=>{
        console.log('........');
       commentList.push(<Comment name={item.author} word={item.text} />);
      }
    );
    console.log("commentList size:"+commentList.length);
    return (
      <ul>
        {commentList}
      </ul>
    );
  }
}

class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.onPostComment = this.onPostComment.bind(this);
    this.state = {"name":"","word":""};
  }
  onPostComment(name,word){
    console.log("CommentBox onPostComment...");
    this.setState({"name":name,"word":word});
  }
  render(){
    return(
      <div>
        <CommentForm onPostComment={this.onPostComment}/>
        <CommentList name={this.state.name} word={this.state.word} url="comments.json"/>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
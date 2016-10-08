import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Redirect,IndexRoute,Link,hashHistory} from 'react-router';

var messages = [
	{'id':1,'title':'Welcome to you for appling the job -- from Alibaba','date':new Date().toLocaleString(),'desc':'Hi kim ....Alibaba'},
	{'id':2,'title':'Welcome to you for appling the job -- from Tencent','date':new Date().toLocaleString(),'desc':'Hi kim ....Tencent'},
	{'id':3,'title':'Welcome to you for appling the job -- from Facebook','date':new Date().toLocaleString(),'desc':'Hi kim ....Facebook'},
];


const About = React.createClass({
	render(){
		return (<div>About</div>);
	}
});
const Inbox = React.createClass({
	render(){
		var _messages = messages.map((item)=>{
			var url = '/inbox/messages/'+item.id;
			return <div key={item.id}><Link to={url} >{item.title}</Link>....{item.date}</div>;
		}); 
		console.log(_messages);
		return (
			<div>
				{   
					this.props.children || ["<h3>Welcome to your Inbox</h3>",..._messages] 
				}
			</div>
		);
	}
});
const Message = React.createClass({
	render(){
		var id = this.props.params.id;
		var message;
		for(var i=0;i<messages.length;i++){
			if(messages[i].id == id){
				message = messages[i];
				break;
			}
		}
		return( 
			<div>
				<h3>Message ID:{id}</h3>
				<p>{message.title}</p>
				<p>{message.date}</p>
			</div>
		);	
	}
});
const Messages = React.createClass({
	render(){
		return (
			<div></div>
		);
	}

});
const Home = React.createClass({
	render(){
		return (<div>Home</div>);
	}
});
const App = React.createClass({
	render(){
		return (
			<div>
				<h1>APP</h1>
				<ul>
					<li><Link to='about'>About</Link></li>
					<li><Link to='inbox'>Inbox</Link></li>
					<li><Link to='home'>Home</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
});

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About} />
      		<Route path="inbox" component={Inbox}>
      			<Redirect from="messages/:id" to="/messages/:id" />
      			<Redirect from="messages" to="/messages" />
      		</Route>
      		<Route path="home" component={Home} />
      		<Route component={Inbox}>
      			<Route path="messages/:id" component={Message}/>
      		</Route>
      		<Route component={Inbox}>
      			<Route path="messages" component={Messages}/>
      		</Route>
		</Route>
	</Router>,
	document.getElementById('content')
);
 
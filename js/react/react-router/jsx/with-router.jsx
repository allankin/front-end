import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';

const About = React.createClass({
	render(){
		return (<div>About</div>);
	}
});
const Inbox = React.createClass({
	render(){
		return (<div>Inbox</div>);
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
      		<Route path="inbox" component={Inbox} />
      		<Route path="home" component={Home} />
		</Route>
	</Router>,
	document.getElementById('content')
);
 
import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season';
import Spinner from './Spinner';

class App extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {lat: null, errMsg: ''};
	// }
	state = {lat: null, errMsg: ''};
	componentDidMount() {

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({errMsg: err.message})
		);
	}

	renderContent() {
		if(this.state.errMsg && !this.state.lat){
			return <div>Error: {this.state.errMsg}</div>;	
		}
		if(!this.state.errMsg && this.state.lat){
			return <Season lat={this.state.lat} />;
		}
		else{
			return <Spinner message = "please accept location request"/>;
		}
	}

	render() {
			return (
				<div className = "border red">
					{this.renderContent()}
				</div>
			);
		}
}

ReactDOM.render (
	<App />,
	document.querySelector('#root')
);
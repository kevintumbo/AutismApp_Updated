import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { AppNavigator } from './Navigator';
import ConfigureStore from './src/store/configureStore';

const store = ConfigureStore();

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Registration from './containers/Registration/Registration';
import * as serviceWorker from './serviceWorker';
import store from './store';

const routing = (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" component={Registration} />
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

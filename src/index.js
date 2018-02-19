import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import store from './store';
import Root from './components/Root';

ReactDOM.render(
	<Root store={store}/>, 
	document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import RouteMap from './router/routeMap';

import './static/css/common.less';
import './static/css/font.css';



render(
	
		<RouteMap history={hashHistory} />
	,
	document.getElementById('root')
)
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import List from './List'
import './style.less'

class App extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}
	render(){
		return(
			<div className="app clearfix">
				<div className="nav">
					<List />
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default App
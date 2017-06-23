import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import List from './List'

class App extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>
				<List />
				{this.props.children}
			</div>
		)
	}
}
export default App
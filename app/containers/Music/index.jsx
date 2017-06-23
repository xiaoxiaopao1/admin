import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Music extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>404 Music</div>
		)
	}
}
export default Music
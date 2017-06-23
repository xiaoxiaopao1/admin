import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Photo extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>404 Photo</div>
		)
	}
}
export default Photo
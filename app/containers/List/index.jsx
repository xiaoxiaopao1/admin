import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class List extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>404 List</div>
		)
	}
}
export default List
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class Author extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const isDark = this.props.isDark;
		const style = isDark ? {} : {color: '#404040'}
		return(
			<div className="author-container">
				<img src={this.props.site} />
				<span style={style}>{this.props.author}</span>
			</div>
		)
	}
}
export default Author
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ComponentAuthor from '../../../components/Author'
import site from '../../../static/images/site.jpg'

class Author extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<ComponentAuthor isDark={this.props.isDark} site={site} author='ZDY' />
		)
	}
}
export default Author
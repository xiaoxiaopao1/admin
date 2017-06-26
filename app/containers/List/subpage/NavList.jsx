import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { getListData } from '../../../fetch/list/list'

import ComponentNavList from '../../../components/List'

class NavList extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data: []
		}
	}
	render(){
		return(
			<div>
			{
				this.state.data.length
				? <ComponentNavList data={this.state.data} isDark={this.props.isDark} />
				: ''
			}
			</div>
			
		)
	}
	componentDidMount(){
		var result = getListData();
		result.then((res) => {
			return res.json();
		}).then((json) => {
			const data = json;
			this.setState({
				data: data
			})
		})
	}
}
export default NavList
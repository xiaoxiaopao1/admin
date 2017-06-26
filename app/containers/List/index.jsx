import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import NavList from './subpage/NavList'
import Author from './subpage/Author'
import ChangeBtn from '../../components/ChangeBtn'

import './style.less'


class List extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
		this.state = {
			isDark: true
		}
		
	}
	render(){
		const listStyle = this.state.isDark ? 'dark-list' : 'light-list';
		return(
			<div className={'nav-list ' + listStyle}>
				<Author isDark={this.state.isDark}  />
				<NavList isDark={this.state.isDark}/>
				<div className="bth-container clearfix">
					<div className="change-btn-box">
						<ChangeBtn changeFn={this.isDark.bind(this)} isDark={this.state.isDark} />
					</div>
				</div>
				
			</div>
		)
	}
	isDark(){
		this.setState({
			isDark: !this.state.isDark
		})
	}

	
}
export default List


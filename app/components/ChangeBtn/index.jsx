import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class ChangeBtn extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			isDark: '',
			btnClass:''
		}
	}
	render(){
		const wordClass = this.state.isDark ? 'word1' : 'word2'
		return(
			<div className={'changeBtn ' + this.state.btnClass} onClick={this.handleClick.bind(this)}>
				<span className={'circle ' + (this.state.isDark ? 'circle1' : 'circle2')}></span>
				<span className={'word ' + wordClass}>{this.state.isDark ? 'Dark' : 'Light'}</span>
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			isDark: this.props.isDark
		})
	}
	handleClick(e){
		e.preventDefault();
		

		let isDark = this.props.isDark;

		// 如果父组件传递过来的isDark为true,则添加left-to-right
		if (isDark) {
			this.setState({
				isDark: !this.state.isDark,
				btnClass: 'left-to-right'
			})
		}else{
			this.setState({
				isDark: !this.state.isDark,
				btnClass:'right-to-left'
			})
		}
		// 将状态改变传递给父组件，从而可以是父组件改变自身状态
		this.props.changeFn();
	}
}
export default ChangeBtn


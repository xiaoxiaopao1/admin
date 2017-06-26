import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Link } from 'react-router';
import './style.less';

class List extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data;
		const isDark = this.props.isDark;
		const acitveClass = isDark ? '' : 'light-nav-item'
		return(
			<ul className="nav-list">
				{
					data.map((item,index) => {
						return (
							<li className={'nav-item ' + acitveClass} key={index}>
								<Link to={item.link}>{item.title}</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
	componentDidMount(){

	}
}
export default List
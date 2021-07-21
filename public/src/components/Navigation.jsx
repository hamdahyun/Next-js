import React from 'react';
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = (props) => {
	return (
		<nav>
			<Link to="/">전체보기</Link>
			<Link to="/about">뉴스 (자세히보기)</Link>
		</nav>
	)			
};

export default Navigation;
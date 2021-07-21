import React, { Component } from 'react';
import axios from "axios";
import Images from "../components/Images";
import './Home.css';

export const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY

class Home extends Component {
	state = {
		isLoading : true,
		images: []
	}

	getImages = async () => {
		const {data: {documents}} = await axios({
			url: '/v2/search/image',
			method: 'get', 
			baseURL: 'https://dapi.kakao.com',
			headers: {'Authorization': `KakaoAK ${KAKAO_KEY}`},
			params: {
			query: 'kakao'
		}

	})

	console.log(documents)

	this.setState({ images : documents , isLoading: false })
	}

	componentDidMount() {
		this.getImages();
	}

	render() {
		const { isLoading , images } = this.state

		return (<div className="kakao_wrap"> <ul className="kakao_list">{isLoading ? 
		<div className="loading">Loading...</div> : 
		images.map((image, index) => {
			const { collection , display_sitename, image_url } = image

			return (
			<Images key = {index} collection = {collection}  siteName = {display_sitename} imgUrl = {image_url}/>
			)
		}) } </ul> </div>);
	}
}

export default Home;
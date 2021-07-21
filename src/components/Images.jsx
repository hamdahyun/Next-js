import React from 'react';
// import PropTypes from 'prop-types';

function Images ({collection, siteName, imgUrl , id }) {
	return ( 
		<li >
			<h1>{collection}</h1>
			<h3>{siteName}</h3>
			<div className="img_wrap">
				<img src={imgUrl} alt = "kakao news"/>
			</div>
		</li>
	)
}

// Images.PropTypes = {
// 	collection: PropTypes.string.isRequired,
// 	siteName: PropTypes.string.isRequired,
// 	imageUrl: PropTypes.string.isRequired
// }


export default Images;
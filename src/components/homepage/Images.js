import React, { Fragment } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import '../../js/jquery.toast.js';

const MypicDiv = styled.div`
	background-image: url('${process.env.PUBLIC_URL}/img/5.jpg');
	background-color: #0D1117;
	background-size: cover;
	background-position: center;
	width:450px;
	height:450px;
	margin-bottom:50px;
	margin-top:60px;
	border-radius:15px;
	`;

const Images = (props) => {

	let clicked = 0;
	let currentPic = 0;
	let clickRate = 0;
	let firstTime = new Date();
	let debugModeSeconds = 3;
	let debugModeClick = 5;
	let myPics = props.images;

	const clickOnMyPic = () => {
		clickRate = (new Date().getTime() - firstTime.getTime()) / 1000;
		clicked++;
		if (clicked % debugModeClick === 0) {
			if (clickRate < debugModeSeconds)
				$.toast({
					heading: 'Cheer !',
					text: 'Debug mode activated &#128529; ',
					showHideTransition: 'slide',
				});
			else firstTime = new Date();
		}
		changeMyPic();
	};
	const changeMyPic = () => {
		currentPic = currentPic + 1 > myPics.length-1 ? 0 : currentPic + 1;
		console.log(currentPic);
		$('#mypicDiv').css({
			'background-image':
				'url("' + process.env.PUBLIC_URL + myPics[currentPic].background_image + '")',
			'background-position': myPics[currentPic].background_position,
		});
	};

	return (
		<Fragment>
			{props.images.map((image) => (
				<img
					src={process.env.PUBLIC_URL + image.background_image}
					style={{ display: 'none' }}
					alt='hidden'
				></img>
			))}

			<MypicDiv
				className='d-none d-lg-block left-big-image'
				onClick={clickOnMyPic}
				id='mypicDiv'
			>
				<div id='overlay'></div> 
			</MypicDiv>
		</Fragment>
	);
};

export default Images;

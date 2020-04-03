import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const MypicDiv = styled.div`
	background-image: url('${process.env.PUBLIC_URL}/img/1.jpg');
	background-color: #1d1d1d;
	background-size: cover;
	background-position: center;
	height: 100vh;
	position: sticky;
`;

let clicked = 0;
let currentPic = 0;
let rand = 0;
let clickRate = 0;
let firstTime = new Date();
let debugModeSeconds = 3;
let debugModeClick = 5;
let myPics = [
	{
		background_image: `${process.env.PUBLIC_URL}/img/1.jpg`,
		background_position: 'center'
	},
	{
		background_image: `${process.env.PUBLIC_URL}/img/2.jpg`,
		background_position: 'center'
	},
	{
		background_image: `${process.env.PUBLIC_URL}/img/3.jpg`,
		background_position: 'left'
	},
	{
		background_image: `${process.env.PUBLIC_URL}/img/4.jpg`,
		background_position: 'right'
	}
];
const clickOnMyPic = () => {
	clickRate = (new Date().getTime() - firstTime.getTime()) / 1000;
	clicked++;
	if (clicked % debugModeClick === 0) {
		if (clickRate < debugModeSeconds)
			$.toast({
				heading: 'Cheer !',
				text: 'Debug mode activated &#128529; ',
				showHideTransition: 'slide'
			});
		else firstTime = new Date();
	}
	changeMyPic();
};
const changeMyPic = () => {
	do {
		rand = Math.floor(Math.random() * myPics.length);
	} while (currentPic === rand);

	currentPic = rand;

	$('#mypicDiv').css({
		'background-image': 'url("' + myPics[rand].background_image + '")',
		'background-position': myPics[rand].background_position
	});
};

function App() {
	return (
		<MypicDiv
			className='col-lg-6 col-sm-12'
			onClick={clickOnMyPic}
			id='mypicDiv'
		>
			<div id='overlay'></div>
		</MypicDiv>
	);
}

export default App;

import React from 'react';
import styled from 'styled-components';

const MypicDiv = styled.div`
	background-image: url('${process.env.PUBLIC_URL}/img/1.jpg');
	background-color: #1d1d1d;
	background-size: cover;
	background-position: center;
	height: 100vh;
	position: sticky;
`;
function App() {
	return (
		<MypicDiv
			className='col-lg-6 col-sm-12'
			onclick='clickOnMyPic()'
			id='mypicDiv'
		>
			<div id='overlay'></div>
		</MypicDiv>
	);
}

export default App;

/** @format */

import React from 'react';

const Logo = () => {
	const style = {
		width: '100%',
		height: '70px',
		backgroundColor: '#006b6b',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: "32px",
		fontFamily: "Roboto Condensed"
	};
	return (
		<div style={style}>
			Calculadora
		</div>
	);
};

export default Logo;

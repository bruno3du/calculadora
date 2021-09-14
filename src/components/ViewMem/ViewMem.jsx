/** @format */

import React from 'react';

const ViewMem = (props) => {
	const style = {
		fontWeight: 500,
		fontSize: '18px',
		padding: '0 15px',
		overflow: 'hidden',
		color: '#ffffff',
		width: '95%',
		height: '70px',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		fontFamily: 'Roboto Condensed'
	};
	return (
		<>
			<div style={style} className='memValor'>
				{props.memView}
			</div>
		</>
	);
};

export default ViewMem;

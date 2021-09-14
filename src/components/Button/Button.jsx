/** @format */

import React from 'react';
import './Button.css';

const Button = ({label, handleClick, className, children }) => {
	return (
		<button className={className ? className + ' btn' : 'btn'} onClick={()=>handleClick(label)}>
			{children || label}
		</button>
	);
};

export default Button;
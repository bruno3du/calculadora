/** @format */

import React from 'react';
import Calculadora from './components/Calculadora/Calculadora';
import CalcProvider from './components/Context';
import './App.css'
const App = () => {
	return (
		<div>
			<CalcProvider>
				<Calculadora />
			</CalcProvider>
		</div>
	);
};

export default App;

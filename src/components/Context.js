/** @format */

import { createContext, useState } from 'react';

export const CalcContext = createContext();

export default function CalcProvider({ children }) {
	const [valor, setValor] = useState('');
	const [memValor, setMemValor] = useState('');
	const [lock, setLock] = useState(false);
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState(null);
	const [sign, setSign] = useState(false);
	const [dot, setDot] = useState(false);

	return (
		<CalcContext.Provider
			value={{
				valor,
				setValor,
				memValor,
				setMemValor,
				lock,
				setLock,
				operator,
				setOperator,
				result,
				setResult,
				sign,
				setSign,
				dot,
				setDot
			}}>
			{children}
		</CalcContext.Provider>
	);
}

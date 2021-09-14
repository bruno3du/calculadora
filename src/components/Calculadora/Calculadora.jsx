/** @format */

import React, { useEffect, useContext, useState } from 'react';
import './Calculadora.css';
import Teclas from '../Teclas/Teclas';
import Logo from '../Logo/Logo';
import ViewMem from '../ViewMem/ViewMem';
import ViewResult from '../ViewResult/ViewResult';
import { CalcContext } from '../Context';
import formatNumber from '../maskNumber';

const Calculadora = () => {
	const [resultView, setResultView] = useState('');
	const [memView, setMemView] = useState('');
	const {
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
		setDot,
	} = useContext(CalcContext);

	useEffect(() => {
		if (!result && result !== 0) {
			let tela = formatNumber(memValor) + operator + formatNumber(valor);
			setResultView(tela);
		} else {
			setResultView(formatNumber(result));
		}
	}, [valor, operator, memValor, result, setResultView]);

	function valueButton(num) {
		if (valor.length < 15) {
			if (!result) {
				setValor(valor + num);
			} else {
				cleanAll();
				setValor(String(num));
			}
		}
	}

	function newCalc() {
		// eslint-disable-next-line
		if (isNaN(result) || result || result == 0) {
			if (operator === '+') {
				let recalcular = parseFloat(valor) + parseFloat(memValor) + result;
				setMemView(
					parseFloat(valor) +
						parseFloat(memValor) +
						' ' +
						operator +
						' ' +
						String(result)
				);
				setResult(recalcular);
			} else if (operator === '-') {
				if (Math.sign(memValor) === -1) {
					let recalcular = result - (parseFloat(valor) - parseFloat(memValor));
					setMemView(
						parseFloat(valor) +
							parseFloat(memValor) +
							' ' +
							operator +
							' ' +
							String(result)
					);
					return setResult(recalcular);
				}
				let recalcular = result - parseFloat(valor);
				setResult(recalcular);
			} else if (operator === '÷') {
				let recalcular = result / parseFloat(valor);
				setResult(recalcular);
			} else if (operator === 'x') {
				let recalcular = parseFloat(valor) * parseFloat(memValor) + result;
				setResult(recalcular);
			}
		} else {
			setValor('0');
		}
	}

	function resolution() {
		if (operator === '√') {
			setResult(Math.sqrt(parseFloat(valor)));
			setMemView(operator + formatNumber(valor) + '=');
			setLock(false);
			return;
		}

		if (valor && memValor && result === null) {
			if (operator === '+') {
				setResult(parseFloat(valor) + parseFloat(memValor));
				setDot(false);
				setMemView(
					formatNumber(memValor) + operator + formatNumber(valor) + '='
				);
				setLock(false);
			} else if (operator === '-') {
				setResult(parseFloat(memValor) - parseFloat(valor));
				setDot(false);
				setMemView(
					formatNumber(memValor) + operator + formatNumber(valor) + '='
				);
				setLock(false);
			} else if (operator === '÷') {
				if (valor === '0') {
					return alert('Não é possível realizar a divisão por zero');
				}
				setDot(false);
				setResult(parseFloat(memValor) / parseFloat(valor));
				setMemView(
					formatNumber(memValor) + operator + formatNumber(valor) + '='
				);
				setLock(false);
			} else if (operator === 'x') {
				setDot(false);
				setResult(parseFloat(valor) * parseFloat(memValor));
				setMemView(
					formatNumber(memValor) + operator + formatNumber(valor) + '='
				);
				setLock(false);
			}
		} else {
			newCalc();
		}
	}

	function raizQuadrada() {
		setOperator('√');
	}

	function operadorButton(op) {
		if (!result && result !== 0) {
			if (!lock && valor) {
				setMemValor(valor);
				setDot(false);
				setLock(true);
				setValor('');
				setOperator(op);
				setResult(null);
			} else {
				resolution();
			}
		} else {
			setValor('');
			setOperator(op);
			setMemValor(String(result));
			setLock(true);
			setDot(false);
			setResult(null);
		}
	}

	function isOperator(op) {
		if (valor || memValor) {
			if (sign && valor.length < 2) {
				valueButton('0');
				setSign(false);
			} else {
				operadorButton(op);
			}
		} else if (!sign && !memValor) {
			setSign(true);
			return valueButton(op);
		}
	}

	function newSign() {
		let newSign = valor.slice(0, 1);
		if (newSign === '-') {
			setValor(valor.replace('-', '+'));
		} else if (newSign === '+') {
			setValor(valor.replace('+', '-'));
		} else {
			setValor(valor.replace('', '-'));
		}
	}

	function dotValidator() {
		if (!dot) {
			if (valor) {
				setValor(valor + '.');
				setDot(true);
			} else {
				setValor(valor + '0.');
				setDot(true);
			}
		}
	}

	function cleanOne() {
		if (valor && !operator) {
			setValor(valor.slice(0, -1));
			setSign(false);
			if (valor.split('').pop() === '.') {
				setDot(false);
			}
		} else if (memValor && operator && !valor) {
			setOperator('');
			setLock(false);
			setValor(memValor);
			setMemValor('');
		} else if (memValor && operator && valor && !result) {
			setValor(valor.slice(0, -1));
			if (valor.split('').pop() === '.') {
				setDot(false);
			}
		}
	}

	function cleanAll() {
		setOperator('');
		setMemView('');
		setResultView('');
		setMemValor('');
		setLock(false);
		setValor('');
		setDot(false);
		setSign(false);
		setResult(null);
	}

	return (
		<div className='calculadora'>
			<Logo />
			<ViewMem memView={memView} />
			<ViewResult resultView={resultView} />
			<Teclas
				valueButton={valueButton}
				cleanOne={cleanOne}
				cleanAll={cleanAll}
				dotValidator={dotValidator}
				newSign={newSign}
				raizQuadrada={raizQuadrada}
				operadorButton={operadorButton}
				isOperator={isOperator}
				resolution={resolution}
			/>
		</div>
	);
};

export default Calculadora;

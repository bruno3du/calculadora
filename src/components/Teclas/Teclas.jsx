/** @format */

import Button from '../Button/Button';

const Teclas = (props) => {
	const style = {
		width: '100%',
		display: 'grid',
		gridTemplate: '1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr',
		justifyItems: "center",
		marginLeft: "0.8px"
	};
	return (
		<div style={style} className='tecla'>
			<Button label='C' className='greydark' handleClick={props.cleanAll}>
				C
			</Button>
			<Button className='greydark' handleClick={props.cleanOne}>
				<img className='delete' alt='delete' src='backspace.svg'></img>
			</Button>
			<Button
				label='√'
				className='greydark'
				handleClick={props.raizQuadrada}></Button>
			<Button
				label='÷'
				className='greydark'
				handleClick={props.operadorButton}></Button>
			<Button
				label='7'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='8'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='9'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='x'
				className='greydark'
				handleClick={props.operadorButton}></Button>
			<Button
				label='4'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='5'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='6'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='-'
				className='greydark'
				handleClick={props.isOperator}></Button>
			<Button
				label='1'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='2'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='3'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button
				label='+'
				className='greydark'
				handleClick={props.isOperator}></Button>
			<Button label='+/-' handleClick={props.newSign}></Button>
			<Button
				label='0'
				className='fontweight'
				handleClick={props.valueButton}></Button>
			<Button label='.' handleClick={props.dotValidator}></Button>
			<Button
				label='='
				className='orange'
				handleClick={props.resolution}></Button>
		</div>
	);
};

export default Teclas;

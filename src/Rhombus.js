import React, { useEffect, useState } from 'react';
import './Rhombus.css';

const Rhombus = () => {
	const [numOne, setNumOne] = useState(0);
	const [numTwo, setNumTwo] = useState(0);
	const [numThree, setNumThree] = useState(0);
	const [numFour, setNumFour] = useState(0);
	const [squareRoot, setSquareRoot] = useState(0);

	function concat() {
		let conOne = numOne + numTwo;
		let conTwo = numThree + numFour;
		let parseone = parseInt(conOne);
		let parsetwo = parseInt(conTwo);
		let add = parseone + parsetwo;
		let square = Math.sqrt(add);
		setSquareRoot(square);
	}
	useEffect(() => {
		concat();
	}, [numOne, numTwo, numThree, numFour]);

	const handleNumOneChange = (e) => {
		setNumOne(e.target.value);
	};

	const handleNumTwoChange = (e) => {
		setNumTwo(e.target.value);
	};
	const handleNumThreeChange = (e) => {
		debugger;
		setNumThree(e.target.value);
	};

	const handleNumFourChange = (e) => {
		setNumFour(e.target.value);
	};
	return (
		<div className='RhombusMain'>
			<div className='boxDiv'>
				<div className='numBox'>
					<input
						type='number'
						className='input'
						onChange={handleNumOneChange}
						value={numOne}
					/>
				</div>
				<div className='numBox'>
					<input
						type='number'
						className='input'
						onChange={handleNumTwoChange}
						value={numTwo}
					/>
				</div>
			</div>
			<div className='Rhombus'>
				<div className='divOne'></div>
				<p className='P-tag'>{squareRoot}</p>
				<div className='divTwo'></div>
			</div>
			<div className='boxDiv'>
				<div className='numBox'>
					<input
						type='number'
						className='input'
						onChange={handleNumThreeChange}
						value={numThree}
					/>
				</div>
				<div className='numBox'>
					<input
						type='number'
						className='input'
						onChange={handleNumFourChange}
						value={numFour}
					/>
				</div>
			</div>
		</div>
	);
};

export default Rhombus;

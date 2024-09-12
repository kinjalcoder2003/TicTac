import React, { useEffect, useState } from 'react';

import './Round.css';

const Round = () => {
	const [number, setNumber] = useState([1, 2, 3, 4, 5]);
	const shuffle = (arra) => {
		let arr = [...arra];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	useEffect(() => {
		const id = setInterval(() => {
			setNumber((prev) => shuffle(prev));
		}, 2000);
		return () => clearInterval(id);
	}, []);
	console.log(number);
	return (
		<div className='RoundDivMain'>
			<div className='RoundDivCenter'>
				<div className='Round' id='one'>
					{number[0]}
				</div>
			</div>
			<div className='RoundDivSpaceBetween'>
				<div className='Round' id='two'>
					{number[1]}
				</div>
				<div className='Round' id='three'>
					{number[2]}
				</div>
				<div className='Round' id='four'>
					{number[3]}
				</div>
			</div>
			<div className='RoundDivCenter'>
				<div className='Round' id='five'>
					{number[4]}
				</div>
			</div>
		</div>
	);
};

export default Round;

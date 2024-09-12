import React, { useState } from 'react';
import './Semicircle.css';

const Semicircles = () => {
	const [numOne, setNumOne] = useState(0);
	const [numTwo, setNumTwo] = useState(0);

	const handleNumOneChange = (e) => {
		setNumOne(parseInt(e.target.value));
	};

	const handleNumTwoChange = (e) => {
		setNumTwo(parseInt(e.target.value));
	};
	return (
		<div className='semicircles-container'>
			<div className='sub-container'>
				<div className='box-1'>
					<div className='minibox'>
						<input
							className='input'
							onChange={handleNumOneChange}
							type='number'
							value={numOne}
						/>
					</div>
					<div className='semicircle-1'>
						<p className='num'>{numOne + 1}</p>
					</div>
				</div>
				<div className='box-2'>
					<div className='semicircle-3'>
						<p className='num'>{numTwo + 1}</p>
					</div>
				</div>
			</div>
			<div className='sub-container'>
				<div className='box-1'>
					<div className='semicircle-4'>
						<p className='num'>{(numTwo + 1) * (numTwo + 1)}</p>
					</div>
				</div>
				<div className='box-2'>
					<div className='semicircle-2'>
						<p className='num'>{(numOne + 1) * (numOne + 1)}</p>
					</div>
					<div className='minibox'>
						<input
							className='input'
							onChange={handleNumTwoChange}
							type='number'
							value={numTwo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Semicircles;

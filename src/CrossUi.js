import React from 'react';
import './CrossUi.css';
import image from './star.jpeg';

const CrossUi = () => {
	const allow = [
		[0, 15],
		[1, 14],
		[2, 13],
		[3, 12],
		[4, 11],
		[5, 10],
		[6, 9],
		[7, 8],
		[8, 7],
		[9, 6],
		[10, 5],
		[11, 4],
		[12, 3],
		[13, 2],
		[14, 1],
		[15, 0],
	];
	return (
		<div className='MainDiv'>
			{allow.map((item) => {
				return (
					<div className='Div'>
						{[...Array(16).keys(16)].map((str) => {
							return (
								<div className='box'>
									{item.includes(str) ? (
										<img className='starImg' src={image} />
									) : (
										''
									)}
								</div>
							);
						})}
					</div>
				);
			})}
			<div>
				<img className='mainImg' src={image} />
			</div>
		</div>
	);
};

export default CrossUi;

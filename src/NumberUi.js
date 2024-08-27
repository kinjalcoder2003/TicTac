import React from 'react';
import './NumberUi.css';

const NumberUi = () => {
	const arrTwo = [...Array(5).keys()];
	const arrOne = [...Array(7).keys()];

	const renderStarDiv = (num) => {
		return (
			<div>
				{[...Array(num).keys(num)].map((ite) => (
					<span className='Span'>{ite + 1}</span>
				))}
			</div>
		);
	};

	function triangleStar(num) {
		return (
			<div className='BoxDiv'>
				{[...Array(num).keys(num)].map((ite) => {
					return (
						<>
							<div className='starDiv'>
								{arrTwo.map((item) => {
									return <div>{renderStarDiv(item)}</div>;
								})}
							</div>
							<div>
								{arrTwo.map((item) => {
									return <div>{renderStarDiv(item)}</div>;
								})}
							</div>
						</>
					);
				})}
			</div>
		);
	}
	return (
		<div className='tri-main'>
			{arrOne.map((item) => {
				return <div>{triangleStar(item)}</div>;
			})}
		</div>
	);
};

export default NumberUi;

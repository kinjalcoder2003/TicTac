import React from 'react';
import './StarsUi.css';

const StarsUi = () => {
	const arrTwo = [...Array(10).keys()];
	const arrOne = [...Array(10).keys()].reverse();

	const renderStarDiv = (num) => {
		return (
			<div>
				{Array(num)
					.fill('*')
					.map((ite) => (
						<span className='span'>{ite}</span>
					))}
			</div>
		);
	};

	return (
		<div className='innerDivStar'>
			<div className='boxDivStar'>
				<div>
					{arrOne.map((item) => {
						return <div>{renderStarDiv(item)}</div>;
					})}
				</div>
				<div className='StarUiDiv'>
					{arrOne.map((item) => {
						return <div>{renderStarDiv(item)}</div>;
					})}
				</div>
			</div>
			<div>
				<div className='DivStar'>
					<div className='StarUiDiv'>
						{arrTwo.map((item) => {
							return <div>{renderStarDiv(item)}</div>;
						})}
					</div>
					<div>
						{arrTwo.map((item) => {
							return <div>{renderStarDiv(item)}</div>;
						})}
					</div>
				</div>

				<div className='DivStar'>
					<div className='StarUiDiv'>
						{arrOne.map((item) => {
							return <div>{renderStarDiv(item)}</div>;
						})}
					</div>
					<div>
						{arrOne.map((item) => {
							return <div>{renderStarDiv(item)}</div>;
						})}
					</div>
				</div>
			</div>

			<div className='boxDivStar'>
				<div>
					{arrTwo.map((item) => {
						return <div>{renderStarDiv(item)}</div>;
					})}
				</div>
				<div className='StarUiDiv'>
					{arrTwo.map((item) => {
						return <div>{renderStarDiv(item)}</div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default StarsUi;

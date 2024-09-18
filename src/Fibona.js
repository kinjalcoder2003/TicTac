import React from 'react';

const Fibona = ({ fiboNumber }) => {
	function fibonaArray(num) {
		let num1 = 0;
		let num2 = 1;
		let arr = [0, 1];
		for (let i = 2; i < num; i++) {
			let sum = num1 + num2;
			arr.push(sum);
			num1 = num2;
			num2 = sum;
		}
		console.log(arr);
		return arr;
	}
	let fibo = fibonaArray(fiboNumber);

	// function generateColor(ind) {
	// 	const hue = (ind * 137.508) % 360;
	// 	return `hsl(${hue}, 100%, 50%)`;
	// }

	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				background: '#8C3061',
			}}>
			{fibo.map((res) => (
				<div
					style={{
						width: `${res}px`,
						height: `${res}px`,
						borderRadius: '50%',
						position: 'absolute',
						border: '5px solid white',
						color: 'white',
					}}></div>
			))}
		</div>
	);
};

export default Fibona;

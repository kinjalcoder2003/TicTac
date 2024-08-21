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
				background: 'black',
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

// import React, { useState } from 'react';

// const TicTac = () => {
// 	const [click, setClick] = useState({
// 		1: '',
// 		2: '',
// 		3: '',
// 		4: '',
// 		5: '',
// 		6: '',
// 		7: '',
// 		8: '',
// 		9: '',
// 	});
// 	const [winner, setWinner] = useState(null);
// 	const [currentPlayer, setCurrentPlayer] = useState('x');

// 	let winningPos = [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[3, 6, 9],
// 		[1, 5, 9],
// 		[3, 5, 7],
// 	];

// 	function handleClick(i) {
// 		if (click[i] !== '' || winner) return;

// 		// Update the clicked position with the current player's symbol
// 		const newClick = { ...click, [i]: currentPlayer };
// 		setClick(newClick);

// 		// Check for a winner
// 		winningPos.forEach((pos) => {
// 			const [a, b, c] = pos;
// 			if (newClick[a] && newClick[a] === newClick[b] && newClick[a] === newClick[c]) {
// 				setWinner(currentPlayer);
// 			}
// 		});

// 		// Switch player if no winner yet
// 		if (!winner) {
// 			setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
// 		}
// 	}

// 	return (
// 		<div>
// 			<div>
// 				{Object.keys(click).map((i) => (
// 					<button key={i} onClick={() => handleClick(i)}>
// 						{click[i]}
// 					</button>
// 				))}
// 			</div>
// 			{winner && <div>Player {winner} wins!</div>}
// 		</div>
// 	);
// };

// export default TicTac;

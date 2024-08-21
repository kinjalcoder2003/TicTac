import React, { useState } from 'react';
import './TicTac.css';

const TicTac = () => {
	const [click, setClick] = useState({
		1: '',
		2: '',
		3: '',
		4: '',
		5: '',
		6: '',
		7: '',
		8: '',
		9: '',
	});
	const [winner, setWinner] = useState();
	const [turn, setTurn] = useState('x');
	let winnigPos = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	];

	function handleClick(i) {
		if (winner && winner !== 'draw') {
			return;
		}
		if (!(click[i] === '')) {
			return;
		}
		let value = '';
		if (turn == 'x') {
			value = turn;
		} else {
			value = 'o';
		}

		const localValues = { ...click };
		localValues[i] = value;
		setClick(localValues);
		winnigPos.forEach((pos) => {
			if (
				localValues[pos[0]] === '' ||
				localValues[pos[1]] === '' ||
				localValues[pos[2]] === ''
			) {
			} else if (
				localValues[pos[0]] === localValues[pos[1]] &&
				localValues[pos[1]] === localValues[pos[2]]
			) {
				setWinner(localValues[pos[0]]);
			}
		});
		debugger;
		const empty = Object.values(localValues).filter((item) => item === '');
		if (empty?.length < 1) {
			setWinner('draw');
		}
		setTurn(turn == 'x' ? 'o' : 'x');
	}

	function onRestart() {
		setClick({
			1: '',
			2: '',
			3: '',
			4: '',
			5: '',
			6: '',
			7: '',
			8: '',
			9: '',
		});
		setWinner();
	}
	return (
		<div className='mainDiv'>
			<h2 className='header'>Tic Tac Toe</h2>
			<div className='innerDiv'>
				<div className='border'>
					<div onClick={() => handleClick(1)} className='btndiv'>
						{click[1]}
					</div>
					<div onClick={() => handleClick(2)} className='btndiv'>
						{click[2]}
					</div>
					<div onClick={() => handleClick(3)} className='btndiv'>
						{click[3]}
					</div>
				</div>
				<div className='border'>
					<div onClick={() => handleClick(4)} className='btndiv'>
						{click[4]}
					</div>
					<div onClick={() => handleClick(5)} className='btndiv'>
						{click[5]}
					</div>
					<div onClick={() => handleClick(6)} className='btndiv'>
						{click[6]}
					</div>
				</div>
				<div className='border'>
					<div onClick={() => handleClick(7)} className='btndiv'>
						{click[7]}
					</div>
					<div onClick={() => handleClick(8)} className='btndiv'>
						{click[8]}
					</div>
					<div onClick={() => handleClick(9)} className='btndiv'>
						{click[9]}
					</div>
				</div>
				<div>
					<button onClick={onRestart} className='restartBtn'>
						Restart
					</button>
				</div>
				{winner &&
					(winner === 'draw' ? (
						<>
							<h3>It's a Draw!</h3>
						</>
					) : (
						<h3>Player {winner} Wins!</h3>
					))}
				{winner && <h3>Game Over!</h3>}
			</div>
		</div>
	);
};

export default TicTac;

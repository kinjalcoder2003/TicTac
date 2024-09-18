import React, { useState } from 'react';
import './Sudoku.css';

const Sudoku = () => {
	const initialBoard = Array(9)
		.fill(null)
		.map(() => Array(9).fill(''));

	const [game, setGame] = useState(initialBoard);
	const [error, setError] = useState('');

	// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// const alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

	function valid(row, col, val) {
		if (val == 0) {
			return false;
		}
		if (game[row].includes(val)) {
			return false;
		}
		for (let i = 1; i < 9; i++) {
			if (game[i][col] === val) {
				return false;
			}
		}
		return true;
	}

	function handleChange(e, row, col) {
		const val = e.target.value;
		const newGame = game.map((row) => [...row]);

		if (valid(row, col, val)) {
			newGame[row][col] = val;
			setGame(newGame);
			setError('');
		} else {
			newGame[row][col] = '';
			setGame(newGame);
			setError('Number is not valid');
		}
	}

	return (
		<div className='SudokuDivMain'>
			<h2 className='header'>SUDOKU</h2>
			<div>
				{initialBoard.map((item, row) => {
					return (
						<div className='SudukuDivInner'>
							{item.map((ite, col) => (
								<input
									value={game[row][col]}
									onChange={(e) => handleChange(e, row, col)}
									type='text'
									className='InputDiv'
									key={row + col}
									maxLength={'1'}
								/>
							))}
						</div>
					);
				})}
			</div>
			<p className='error'>{error}</p>
		</div>
	);
};

export default Sudoku;

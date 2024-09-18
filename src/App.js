import './App.css';
import NumberUi from './NumberUi';
import StarsUi from './StarsUi';
import Fibona from './Fibona';
import Sudoku from './Sudoku';
import TicTac from './TicTac';
import Triangle from './Triangle';
import LoginPage from './LoginPage';
import { Route, Routes } from 'react-router-dom';
import Dash from './Dash';
import CrossUi from './CrossUi';
import Round from './Round';
import Semicircle from './Semicircle';
import Rhombus from './Rhombus';

function App() {
	return (
		<div>
			<Fibona fiboNumber={16} />
			{/* <Sudoku></Sudoku> */}
			{/* <TicTac /> */}
			{/* <StarsUi /> */}
			{/* <Triangle /> */}
			{/* <NumberUi /> */}
			{/* <LoginPage /> */}
			{/* <CrossUi /> */}
			{/* <Round /> */}
			{/* <Semicircle /> */}
			{/* <Rhombus /> */}
			{/* <Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/dash' element={<Dash />} />
			</Routes> */}
		</div>
	);
}

export default App;

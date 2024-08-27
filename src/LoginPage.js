import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
	const navigate = useNavigate();
	const login = () => {
		navigate('/dash');
	};
	return (
		<div className='main'>
			<div className='div'>
				<hi className='name'>Login Page</hi>
				<input className='input' type='text' />
				<br />
				<input className='input' type='password' />
				<br />
				<button className='button' onClick={login}>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;

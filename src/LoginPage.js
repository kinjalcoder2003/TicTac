import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
	const navigate = useNavigate();
	const login = () => {
		navigate('/dash');
	};
	return (
		<div className='Logmain'>
			<div className='divLog'>
				<hi className='namelog'>Login Page</hi>
				<input className='inputLog' type='text' />
				<br />
				<input className='inputLog' type='password' />
				<br />
				<button className='buttonLog' onClick={login}>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;

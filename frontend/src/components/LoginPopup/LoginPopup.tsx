import React, { useState } from 'react'
import './LoginPopup.css'

interface LoginPopupProps {
	onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {

	const [currState, setcCurrState] = useState('Sign In')

	return (
	<div className='login-popup'>
		<form className='login-popup-box'>
			<div className='login-popup-title'>
				<h2>{currState}</h2>
				<button className='login-popup-close' onClick={onClose}>x</button>
			</div>
			<div className='login-popup-inputs'>
				{currState==='Sign In'?<></>:<input type="text" placeholder='Your name' required/>}
				<input type="text" placeholder='Your email' required/>
				<input type="password" placeholder='Password' required/>
			</div>
			<button>{currState==='Sign Up'? 'Create account':'Log In'}</button>
			{currState === 'Sign Up' && (
				<div className='login-popup-condition'>
					<input type='checkbox' required/>
					<p>By continuing, I agree to the terms of use & privacy policy.</p>
				</div>
			)}
			{currState==='Sign In'? <p>Create a new account?<span onClick={() => setcCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account?<span onClick={() => setcCurrState("Sign In")}>Login here</span></p>}
		</form>
	</div>
	)
}

export default LoginPopup
import React from 'react'
import './RootNav.css'
import { assests } from '../../assets/assets'

interface RootNavProps {
	onLoginClick: () => void;
}

const RootNav: React.FC<RootNavProps> = ({ onLoginClick }) => {
  return (
	<nav className='root-nav'>
		<div>
			<img src={assests.logo} alt='the lock-in logo: concentric circles' className='logo'/>
			<p>LOCK-IN</p>
		</div>
		<button onClick={onLoginClick}>Sign In</button>
	</nav>
  )
}

export default RootNav
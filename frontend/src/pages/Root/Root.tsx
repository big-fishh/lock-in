import React, { useState } from 'react'
import './Root.css'
import RootNav from '../../components/RootNav/RootNav'
import Hero from '../../components/Hero/Hero'
import RootNewSection from '../../components/RootNewSection/RootNewSection'
import LoginPopup from '../../components/LoginPopup/LoginPopup'

const Root = () => {

	const [showLogin, setShowLogin] = useState(false)

	return (
		<>
			<RootNav onLoginClick={() => setShowLogin(true)}/>

			{showLogin && (
				<LoginPopup onClose={() => (setShowLogin(false))}/>
			)}
			
			<Hero/>
			<RootNewSection/>
		</>
	)
}

export default Root
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import NewSetPopup from '../components/NewSetPopup/NewSetPopup'
import './Layout.css'

const Layout = ({ children }: { children: React.ReactNode}) => {

	const [showNewSet, setShowNewSet] = useState(false)
	
	return (
		<>
			<Sidebar onNewSetClick={() => setShowNewSet(true)}/>
			
			{showNewSet && (
				<NewSetPopup onClose={() => setShowNewSet(false)}/>

			)}

			<div className='page-wrapper'>
				<Navbar/>
				<main className='content'>
					{children}
				</main>
			</div>
		</>
  	)
}

export default Layout
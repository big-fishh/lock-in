import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { assests } from '../../assets/assets'

const Navbar = () => {

	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false)
		})
	},[])

  return (
	<nav className={`navbar ${sticky? 'dark-nav':''}`}>
	{/* <nav className='navbar dark-nav'> */}
		{/* <img src={assests.menu} alt='menu' className='menu-icon'/> */}
		<img src={assests.logo} alt='the lock-in logo' className='logo'/>
		<p>LOCK-IN</p>
		<div className={`search-input ${sticky? 'search-input-dark-nav':''}`}>
			<img src={assests.search} alt='search' className='search-icon'/>
			<input type='text' placeholder='Search problems and problem sets'/>
		</div>
		<img src={assests.user} alt='user profile' className='user-icon'/>
	</nav>
  )
}

export default Navbar
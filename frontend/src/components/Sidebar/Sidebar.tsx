import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { assests } from '../../assets/assets'

interface SidebarProps {
	onNewSetClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewSetClick }) => {

	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false)
		})
	},[])

  return (
	<nav className={`sidebar ${sticky? 'dark-sidebar':''}`}>
		<ul>
			<li>
				<button className='sidebar-button'>
					<img className='sidebar-icons' src={assests.home} alt='user home page'/>
				</button>
			</li>
			<li>
				<button onClick={onNewSetClick} className='sidebar-button'>
					<img className='sidebar-icons' src={assests.plus} alt='create new problem set'/>
				</button>
			</li>
		</ul>
	</nav>
  )
}

export default Sidebar
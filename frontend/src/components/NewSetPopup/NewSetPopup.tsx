import React from 'react'
import './NewSetPopup.css'

interface NewSetPopupProps {
	onClose: () => void;
}

const NewSetPopup: React.FC<NewSetPopupProps> = ({ onClose }) => {

  return (
	<div className='newset-popup'>
		<form className='newset-popup-box'>
			<div className='newset-popup-heading'>
				<h2>Create New Problem Set</h2>
				<button className='newset-popup-close' onClick={onClose}>x</button>
			</div>
			<div className='newset-popup-title'>
				<p className='newset-popup-text'>Title</p>
				<input className='newset-popup-title-text' type="text" placeholder="Enter problem set name"/>
			</div>
			<div className='newset-popup-description'>
				<p className='newset-popup-text'>Description</p>
				<textarea className='newset-popup-description-text' placeholder="Describe your problem set"></textarea>
			</div>
			<div className='newset-popup-buttons'>
				<button className='cancel-newset' onClick={onClose}>Cancel</button>
				<button className='create-newset'>Create</button>
			</div>
		</form>
	</div>
  )
}

export default NewSetPopup
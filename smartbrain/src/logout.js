import React from 'react';

const Logout = ({logout}) => {
	return(
		<div className="logout">
				<input className = 'f6 b--none-ns bg-inherit dark-blue underline right-1 mb2' type='submit' value='Log Out' onClick={logout}/>
		</div>
		)
}

export default Logout;
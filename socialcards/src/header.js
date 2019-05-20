import React from 'react';

const Header = ({icon, userName, date, title, author}) => {
	//icon = require('./tower.svg');

	return (
		<div className='flex flex-row items-center'>
			<div className='tc'><img alt='icon' src={require(`./images/${icon}.svg`)} className='mw2 center pl1'/> </div>
			<div className='flex flex-column tl'>
				<div className='pl4 f7'>
					<div className='pb1'><span className='b'>{userName}</span> · {date}</div>
					<div className='pb1'>{title}</div>
					<div className='pb1'> Author: {author}</div>
				</div>
			</div>
		</div>
		);
}

export default Header;

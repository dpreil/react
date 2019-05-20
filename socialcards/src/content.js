import React from 'react';

const Content = ({img, text, link}) => {
	return (
		<div>
			<img alt='hmmm... the content should be here' src={require(`./images/${img}.jpg`)}/>
			<div className='pa1'> {text} </div>
			<div className='pa1 f7 --light-blue'><a href={link}> {link[4].toLowerCase()==='s'?link.slice(12):link.slice(11)} </a> </div>
		</div>
		)
};

export default Content;
import React from 'react';

const Footer = ({comments, shares, likes, emailLink}) => {
	return (
		<div>
			<div className='flex flex-row items-center justify-around pt2 pb2'>
				<div className='w-25 items-center'><img alt='' src={require('./images/like.svg')} className='mw1 center'/>  {likes}</div>
				<div className='w-25'><img alt='' src={require('./images/comment.svg')} className='mw1'/>  {comments}</div>
				<div className='w-25'><img alt='' src={require('./images/share.svg')} className='mw1'/>  {shares}</div>
				<div className='w-25'><a href={`mailto:${emailLink}`}><img alt='' src={require('./images/envelope.svg')} className='mw1'/></a></div>
			</div>
		</div>
		)
}

export default Footer;
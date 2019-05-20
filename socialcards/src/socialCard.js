import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

const SocialCard = ({icon, userName, date, title, author, img, text, link, comments, shares, likes, emailLink}) => {
	return (
		<div className=''>
			<Header
				icon = {icon}
				userName = {userName}
				date = {date}
				title = {title}
				author = {author}/>

			<div className='br1 ba tl'>
				<Content 
					img = {img}
					text = {text}
					link = {link}/>
			</div>
			<div className='h2'>
				<Footer
				comments = {comments}
				shares = {shares}
				likes = {likes}
				emailLink = {emailLink}/>
			</div>
		</div>
		)
};

export default SocialCard;
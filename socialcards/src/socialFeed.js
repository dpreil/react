import React from 'react';
import SocialCard from './socialCard';
import data from './data'

const SocialFeed = () => {
	return (
		<div>
		{
			data.map((datum, i) => {
				return(
					<div className='ba mb5'>
						<SocialCard
							key = {i}
							icon = {data[i].icon}
							userName = {data[i].userName}
							date = {data[i].date}
							title = {data[i].title}
							author = {data[i].author}
							img = {data[i].img}
							text = {data[i].text}
							link = {data[i].link}
							comments = {data[i].comments}
							shares = {data[i].shares}
							likes = {data[i].likes}
							emailLink = {data[i].emailLink}/>
					</div>);
			})
		}
		</div>
	);

}

export default SocialFeed;
import React from 'react';

const ImageBox = ({ImgUrl}) => {
		if(ImgUrl!==''){
				return(
					<div className="imageContainer">
						<img className='imagebox pa1' src={ImgUrl} alt='Please enter a valid URL.'/>
					</div>
					)
			} else {
				return (<div/>)
			}
}

export default ImageBox;
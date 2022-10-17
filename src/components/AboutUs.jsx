import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

import '../styles/AboutUs.css';

const AboutUs = () => {
	const socials = [
		['Github', 'https://github.com/Guevara-Bryan', github],
		['Linkedin', 'https://www.linkedin.com/in/bryan-guevara-swe/', linkedin],
	];

	return (
		<div className='about-us__container'>
			<div className='about-us__socials'>
				{socials.map(([name, url, image]) => {
					return (
						<div key={name} className='social__container'>
							<img src={image} alt='' />
							<a href={url}>
								<h1>{name}</h1>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutUs;

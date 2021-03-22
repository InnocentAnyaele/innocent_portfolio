import React from 'react';
// import logo from '../img/ia.png';
import { Button } from 'react-bootstrap';
import './Main.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import developer from '../img/developer1.svg';
import cv from '../cv/CV.docx';

function Header() {
	return (
		<div
			style={{
				textAlign: 'center',
			}}>
			<div style={{ height: '100vh', padding: '50px' }}>
				<img
					className='img-fluid mx-auto'
					alt='developer'
					src={developer}
					style={{ width: '600px', height: '400px' }}
				/>

				<div>
					<span className='name' style={{ fontSize: '25px', color: 'blue' }}>
						Innocent Anyaele
					</span>
					<br></br>
					<span className='field' style={{ fontSize: '15px', color: 'blue' }}>
						Developer || Data Scientist
					</span>
					<br></br>
					<br></br>

					<a href={cv} download={cv}>
						<Button className='m-3' color='primary'>
							Download CV
						</Button>
					</a>
				</div>
			</div>

			<div style={{ height: '100vh', padding: '50px' }}>
				<article
					className='about-message message is-link mx-auto p-3 img-fluid'
					style={{ width: '500px' }}>
					<div className='message-body text-justify'>
						A passionate Nigerian developer currently pursuing a Bachelor of
						Science Degree in Information Technology at DataLink Institute of
						Business and Technology. My primary languages include Python and
						Javascript although conversant in Java, C++ and C#. I'm experienced
						in React and Django but looking forward to work with more
						frameworks. I have experience in machine learning from various
						internships and hope to build a fruitful career in data science. You
						can contact me at <br></br>
						<strong>innocentanyaele2000@gmail.com </strong> <br></br>
						<strong>+233 55 718 7667</strong>
						<br></br>
						Or use any of these socials
						<ul
							style={{ listStyle: 'none', display: 'inline-flex' }}
							className='m-3'>
							<li>
								<a href='https://github.com/InnocentAnyaele'>
									<GitHubIcon style={{ color: 'blue' }} />
								</a>
							</li>{' '}
							<br></br>
							<li>
								<a href='https://gh.linkedin.com/in/innocent-anyaele-398825165'>
									<LinkedInIcon style={{ color: 'blue' }} />
								</a>
							</li>
						</ul>
					</div>
				</article>
			</div>
		</div>
	);
}

export default Header;

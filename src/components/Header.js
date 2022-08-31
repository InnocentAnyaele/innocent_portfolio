import React from 'react';
// import logo from '../img/ia.png';
import { Button } from 'react-bootstrap';
import './Main.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import developer from '../img/developer1.svg';
// import cv from '../cv/CV.docx';
import profile from '../img/profile1.jpg';

function Header() {
	return (
		<div
			style={{
				textAlign: 'center',
			}}>
			<div style={{ height: 'auto', padding: '50px' }}>
				<img
					className='img-fluid mx-auto'
					alt='developer'
					src={developer}
					style={{ width: '600px', height: '400px' }}
				/>

				<div>
					<span className='name' style={{ fontSize: '27px', color: 'blue' }}>
						Innocent Anyaele
					</span>
					<br></br>
					<span className='field' style={{ fontSize: '17px', color: 'blue' }}>
						Software Engineer & Junior Data Professional
					</span>
					<br></br>
					<br></br>
					<span className='field' style={{ fontSize: '15px', color: 'blue' }}>
						<i>
							innocentanyaele2000@gmail.com <br></br> +233557187667{' '}
						</i>
					</span>
					<br></br>
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
					<br></br>

					<a
						href='https://drive.google.com/file/d/10iOOZURELtjoRC39w7yt2-rUgPv7PyeA/view?usp=sharing'
						download='https://drive.google.com/file/d/10iOOZURELtjoRC39w7yt2-rUgPv7PyeA/view?usp=sharing'>
						<Button className='m-3' color='primary'>
							Get CV
						</Button>
					</a>
				</div>

			</div>

			<div
				className='container-fluid'
				style={{ height: 'auto', padding: '50px' }}>
				<article className='about-message message is-link mx-auto p-3 img-fluid'>
					<div className='message-body text-center'>
						“Man is condemned to be free” – <i>Jean-Paul Sartre</i>
					</div>
				</article>
			</div>

			<div className='p-5 d-flex justify-content-center align-items-center w-100'>
				<div className='w-100' style={{ maxWidth: '700px' }}>
					<img
						className='img-fluid w-100 h-100'
						src={profile}
						alt='profile'
						style={{ borderRadius: '50%' }}
					/>
				</div>
			</div>

			{/* <div
				style={{
					display: 'flex',
					flexDirection: 'row',
					maxHeight: '700px',
					maxWidth: '700px',
					width: '100%',
					height: '100%',
					marginTop: '50px',
					marginLeft: '50px',
					marginRight: '50px',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}>
				<div>
					<img
						className='img-fluid'
						src={profile}
						alt='profile'
						style={{ width: '500', height: '600', borderRadius: '50%' }}
					/>
				</div>
				<div>
				</div>
			</div> */}
		</div>
	);
}

export default Header;

import React from 'react';
import './Main.css';
import { Card } from 'react-bootstrap';
import { WorkList } from './WorkList';

function Work() {
	return (
		<div className='mx-auto' style={{ textAlign: 'center', paddingTop: '20px' }}>
			<h3 style={{ fontSize: '60px', color: 'blue' }} className='work-title'>
				Work & Projects
			</h3>

			<div>
				{WorkList.map((list) => {
					return (
						<div style={{ marginBottom: '50px' }}>
							<Card style={{ width: '50rem' }} className='mx-auto shadow-lg bg-white rounded'>
								<Card.Img variant='top' src={list.image} />
								<Card.Body className='border-top'>
									<Card.Title>
										<b style={{ color: 'blue' }}>{list.name}</b>
									</Card.Title>
									<Card.Text className='text-muted' style={{ color: 'blue' }}>
										{list.about}
									</Card.Text>
									<Card.Link href={list.site}>Site Link</Card.Link>
									<Card.Link href={list.github}>Github</Card.Link>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Work;

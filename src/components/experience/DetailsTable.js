import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const Navigation = (props) => {
	const { experience } = props;
	const { details } = experience;

	return (
		<div>
			{details !== undefined && details.members !== undefined ? (
				<div className='row'>
					<div className='col-lg-4 col-sm-12'>
						<Table
							responsive
							striped
							style={{
								color: 'white',
								fontFamily: '"Open Sans", sans-serif',
								fontSize: '0.8rem',
								backgroundColor: '#292929',
								borderRadius: '5px',
								borderCollapse: 'collapse',
							}}
						>
							<tbody>
								<tr>
									<td>Company/Team members</td>
									<td style={{ opacity: '0.4' }}>{details.members}</td>
								</tr>
								<tr>
									<td>Type of cooperation</td>
									<td style={{ opacity: '0.4' }}>{details.type}</td>
								</tr>
								<tr>
									<td>Collaboration period</td>
									<td style={{ opacity: '0.4' }}>{details.period}</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className='col-lg-8 col-sm-12'>
						<Table
							responsive
							striped
							style={{
								color: 'white',
								fontFamily: '"Open Sans", sans-serif',
								fontSize: '0.8rem',
								backgroundColor: '#292929',
								borderRadius: '5px',
								borderCollapse: 'collapse',
							}}
						>
							<tbody>
								<tr>
									<td style={{ width: '150px' }}>Tecs</td>
									<td style={{ opacity: '0.4' }}>
										{details.tecs.map((tec) => (
											<span
												className='badge badge-light'
												style={{ marginRight: '5px' }}
											>
												{tec}
											</span>
										))}
									</td>
								</tr>
								<tr>
									<td style={{ width: '60px' }}>Co-Workers</td>
									<td style={{ opacity: '0.7' }}>
										{details.partners.map((partner) => (
											<OverlayTrigger
												placement='top'
												overlay={
													<Tooltip style={{ opacity: '1', width:'350px!important',lineHeight:'1.1' }}>
														<div style={{ padding: '10px' }}>
															<center>
																<img
																	src={
																		process.env.PUBLIC_URL +
																		'/' +
																		partner.picture
																	}
																	alt={partner.name}
																	style={{
																		width: '80px',
																		borderRadius: '50%',
																		marginBottom: '10px',
																		display: 'block',
																	}}
																/>
															</center>
															{partner.name} <br />{' '}
															<small>{partner.jobTitle}</small>
														</div>
													</Tooltip>
												}
											>
												<img
													src={process.env.PUBLIC_URL + '/' + partner.picture}
													alt={partner.name}
													style={{
														width: '20px',
														borderRadius: '50%',
														marginRight: '10px',
													}}
												/>
											</OverlayTrigger>
										))}
									</td>
								</tr>
								<tr>
									<td style={{ width: '60px' }}>Achievements</td>
									<td style={{ opacity: '0.4' }}>{details.achievements}</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navigation;

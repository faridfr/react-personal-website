import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
// import { SRLWrapper } from 'simple-react-lightbox';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Navigation = (props) => {
	const { memory } = props;
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const slideNumber = window.innerWidth < 992 ? 1 : 3;
	return (
		<div className='row'>
			<div className='col-lg-12'>
				{/* startslider */}
				<div style={{ padding: 0, maxWidth: '100%', margin: '0' }}>
					<ItemsCarousel
						infiniteLoop={false}
						gutter={12}
						activePosition={'center'}
						chevronWidth={60}
						disableSwipe={false}
						alwaysShowChevrons={true}
						numberOfCards={slideNumber}
						slidesToScroll={slideNumber}
						showSlither={false}
						enablePlaceholder={true}
						numberOfPlaceholderItems={slideNumber}
						firstAndLastGutter={false}
						rightChevron={'>'}
						leftChevron={'<'}
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						outsideChevron={false}
						placeholderItem={
							<div style={{ height: 250, background: '#EEE' }} />
						}
					>
						{memory.images.map((_, i) => (
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip>{memory.images[i].title}</Tooltip>}
							>
								<div
									style={{
										borderRadius: '5px',
										height: 250,
										backgroundImage: `url(${process.env.PUBLIC_URL}/${memory.images[i].link})`,
										backgroundPosition: 'center',
										backgroundSize: 'cover',
									}}
								></div>
							</OverlayTrigger>
						))}
					</ItemsCarousel>
				</div>
				{/* endslider */}
			</div>
		</div>
	);
};

export default Navigation;

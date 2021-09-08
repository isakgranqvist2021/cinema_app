/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { slideShowStyles as useStyles } from 'Utils/hooks';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

export default function SlideshowComponent(props: any): JSX.Element {
	const classes = useStyles();

	return (
		<div>
			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				autoplay={{ delay: 7000 }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				{props.images.map((img: string) => (
					<SwiperSlide>
						<div
							className={classes.image}
							style={{ backgroundImage: `url(${img})` }}></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

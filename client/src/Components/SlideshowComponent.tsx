/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

export default function SlideshowComponent(props: any): JSX.Element {
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
						<img
							src={img}
							alt=''
							style={{ width: '100%', height: '50vh' }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

const ImageCarousel = ({images}) => {
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 10000, stopOnInteraction: false, stopOnMouseEnter: true})]);

	return (
		<div className='embla overflow-hidden' ref={emblaRef}>
			<div className='embla__container flex'>
				{images.map((e, i) => 
					<div key={i} className="relative flex-[0_0_100%]">
						<img src={e} alt="Project Image" className="rounded max-h-[300px] mx-auto xl:max-h-[320px] xl:mx-0 xl:ml-auto"></img>
					</div>
            	)}
			</div>
		</div>
	);
};

export default ImageCarousel;

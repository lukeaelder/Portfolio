import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({images}) => {
    return (
        <Carousel autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} emulateTouch={true} className="max-w-[500px] xl:max-w-[600px] min-w-[300px] shadow-lg shadow-slate-200">
            {images.map((e, i) => 
                <div key={i}>
                    <img src={e} alt="Project Image" className="rounded"></img>
                </div>
            )}
        </Carousel>
    )
}

export default ImageCarousel;
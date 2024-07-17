import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function IndividualIntervalsExample({ slides }) {
    return (
        <Carousel>
            <Carousel.Item interval={2500}>
                <CarouselImage src={slides[0]} />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <CarouselImage src={slides[1]} />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <CarouselImage src={slides[2]} />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
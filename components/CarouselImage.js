import Image from 'next/image';

const CarouselImage = ({ src, alt, text }) => (
    <div style={{ position: 'relative', width: '100%', height: '150px' }}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
);

export default CarouselImage;
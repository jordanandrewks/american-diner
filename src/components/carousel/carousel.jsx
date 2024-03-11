"use client"

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ImageCarousel = ({ images }) => (
  <div>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.url} height={100} width={100} alt={image.alt} />
          <p className="legend">{image.caption}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default ImageCarousel;

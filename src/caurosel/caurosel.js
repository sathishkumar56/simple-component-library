import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousel1({images}) {
    if (images == undefined) return;
    return (
        <div>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showStatus={false}
                showArrows={true}
                showThumbs={false}
                interval={1500}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`image${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default Carousel1;
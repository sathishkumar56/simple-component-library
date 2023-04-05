import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousel1({ images }) {
    if (images == undefined) return;
    return React.createElement(
        "div",
        null,
        React.createElement(
            Carousel,
            {
                infiniteLoop: true,
                autoPlay: true,
                showStatus: false,
                showArrows: true,
                showThumbs: false,
                interval: 1500
            },
            images.map((image, index) => React.createElement(
                "div",
                { key: index },
                React.createElement("img", { src: image, alt: `image${index + 1}` })
            ))
        )
    );
}
export default Carousel1;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel1 = props => {
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
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: props.s1, alt: "image1" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: props.s2, alt: "image2" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: props.s3, alt: "image3" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: props.s4, alt: "image4" })
            )
        )
    );
};
export default Carousel1;
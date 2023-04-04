import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousel1(s1, s2, s3, s4) {
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
                React.createElement("img", { src: s1, alt: "image1" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: s2, alt: "image2" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: s3, alt: "image3" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: s4, alt: "image4" })
            )
        )
    );
};
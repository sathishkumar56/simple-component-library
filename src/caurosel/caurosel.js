import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Carousel1=(props)=> {
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

                <div >
                    <img src={props.s1} alt="image1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div >
                    <img src={props.s2} alt="image2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={props.s3} alt="image3" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={props.s4} alt="image4" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>
        </div>
    );
}
export default Carousel1;
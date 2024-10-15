import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './imgCarousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImgCarousel =()=>{
    return(
        <div id='Imgcrls'>
            <Carousel  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={1000} showArrows={false} dynamicHeight={'40%'} width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                <div>
                    <img src="/public/images/HD-wallpaper-artistic-house.jpg" />
                    
                </div>
                <div>
                    <img src="/public/images/bdd322f9c4863c826d314a20550ec679.jpg" />
                    
                </div>
                <div>
                    <img src="/public/images/WhitestoneWC_800p-WM.jpg" />
                    
                </div>
            </Carousel>
        </div>
    )
}


export default ImgCarousel
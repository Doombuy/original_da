import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './txtCarousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TxtCarousel =()=>{
    return(
        <div id='Txtcrls'>
            <Carousel  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={1000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                <div id='txtdiv'>
                   <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum, est facilis asperiores ullam repellendus, ab necessitatibus numquam corrupti laudantium eveniet voluptas magnam provident? Optio tenetur a nesciunt laboriosam quisquam.</p>
                </div>
                <div id='txtdiv'>
                    <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum architecto quo, quis magni nobis quasi unde quibusdam asperiores obcaecati repudiandae. Dolor illo officiis quos asperiores inventore quo libero molestiae.</p>
                </div>
                <div id='txtdiv'>
                    <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt vero consequatur minus, reprehenderit ipsam aliquam temporibus porro. Ad cum dolores nihil soluta? Itaque amet facilis laudantium sunt voluptate quasi.</p>   
                </div>
            </Carousel>
        </div>
    )
}


export default TxtCarousel
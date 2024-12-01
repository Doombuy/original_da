import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  './TopProduct.scss'

const TopProduct = () =>{
    return(
        <div className='carousel'>
            <div id='Imgcrls'>
                <Carousel  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false} dynamicHeight={'40%'} width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
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
            <div id='Txtcrls'>
                <Carousel  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                    <div id='txtdiv'>
                        <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt vero consequatur minus, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum, est facilis asperiores ullam repellendus, ab necessitatibus numquam corrupti laudantium eveniet voluptas magnam provident? Optio tenetur a nesciunt laboriosam quisquam.</p>
                    </div>
                    <div id='txtdiv'>
                        <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt vero consequatur minus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum architecto quo, quis magni nobis quasi unde quibusdam asperiores obcaecati repudiandae. Dolor illo officiis quos asperiores inventore quo libero molestiae.</p>
                    </div>
                    <div id='txtdiv'>
                        <img src="/public/images/whbg.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt vero consequatur minus, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt vero consequatur minus, reprehenderit ipsam aliquam temporibus porro. Ad cum dolores nihil soluta? Itaque amet facilis laudantium sunt voluptate quasi.</p>   
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
export default TopProduct
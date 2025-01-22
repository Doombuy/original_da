import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  '../carousel/GeneralCarouselModule.scss'
import { Link } from 'react-router-dom';


const ProductCarousel = ({ productIds }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Загружаем данные из JSON
    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Фильтруем продукты по переданным ID
                const filteredProducts = data.filter(product => productIds.includes(product.id));
                setProducts(filteredProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
                setLoading(false);
            });
    }, [productIds]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Carousel
        style={{width:'90%',display: 'flex',marginLeft: '5%',height: '800px'}} swipeable={false} id='carausel_general' dynamicHeight={false}  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}
        >
            {products.map(product => (
                <div key={product.id}>
                    {product.images.length > 0 ? (
                        <img className='img_prod'
                            src={product.images[0]}
                            alt={`Product image ${product.id}`}
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '800px',
                                objectFit: 'cover',
                                borderRadius: '15px 0 0 15px'
                            }}
                        />
                    ) : (
                        <img className='img_prod'
                            src="/public/images/default_image.jpg"
                            alt="Default image"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '800px',
                                objectFit: 'cover',
                                borderRadius: '15px 0 0 15px'
                            }}
                        />
                    )}
                </div>
            ))}
        </Carousel>
    );
};

export default ProductCarousel; 
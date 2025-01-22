import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  '../carousel/GeneralCarouselModule.scss'
import { Link } from 'react-router-dom';
import './NewProduct.scss'

const NewProduct = () =>{
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
                // Замените на те ID, которые вам нужны для новинок
                const productIdsN = [1, 2, 3, 4]; // Замените на ваши ID
                // Фильтруем продукты по переданным ID
                const filteredProducts = data.filter(product => 
                    productIdsN.includes(product.id)
                );
                setProducts(filteredProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return(
        <>
            <div className='new_prod_full'>
                <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'32px'}}>Новинки</h1>
                <div className='new_prod_full_mb' style={{display:'flex', justifyContent:'center', marginTop:'5%'}}>

                    
                    <div className='new_prod_mb' style={{display:'none'}}>
                        <div className='new_prod_11'>
                        
                        {products.length > 0 && (
                                <div key={products[0].id}>
                                    <img
                                        src={products[0].images[0]}
                                        alt={`Product image ${products[0].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[0].name}</p>
                                    <a href="/product/1" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}

                        
                        </div>
                        <div className='new_prod_22'>
                        {products.length > 1 && (
                                <div key={products[1].id}>
                                    <img
                                        src={products[1].images[0]}
                                        alt={`Product image ${products[1].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[1].name}</p>
                                    <a href="/product/2" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="new_prod_mb2">
                    <div className='new_prod_33'>
                    {products.length > 2 && (
                            <div key={products[2].id}>
                                <img
                                    src={products[2].images[0]}
                                    alt={`Product image ${products[2].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[2].name}</p>
                                <a href="/product/3" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    </div>
                    <div className='new_prod_44'>
                    {products.length > 3 && (
                            <div key={products[3].id}>
                                <img
                                    src={products[3].images[0]}
                                    alt={`Product image ${products[3].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[3].name}</p>
                                <a href="/product/4" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    </div>
                    </div>
                    
                    <div className='new_prod_1'>
                    
                    {products.length > 0 && (
                            <div key={products[0].id}>
                                <img
                                    src={products[0].images[0]}
                                    alt={`Product image ${products[0].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[0].name}</p>
                                <a href="/product/1" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    
                    </div>
                    <div className='new_prod_2'>
                    {products.length > 1 && (
                            <div key={products[1].id}>
                                <img
                                    src={products[1].images[0]}
                                    alt={`Product image ${products[1].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[1].name}</p>
                                <a href="/product/2" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    </div>
                    <div className='new_prod_3'>
                    {products.length > 2 && (
                            <div key={products[2].id}>
                                <img
                                    src={products[2].images[0]}
                                    alt={`Product image ${products[2].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[2].name}</p>
                                <a href="/product/3" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    </div>
                    <div className='new_prod_4'>
                    {products.length > 3 && (
                            <div key={products[3].id}>
                                <img
                                    src={products[3].images[0]}
                                    alt={`Product image ${products[3].id}`}
                                    style={{
                                        display: 'block',
                                        width: '300px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'
                                    }}
                                />
                                <p>{products[3].name}</p>
                                <a href="/product/4" style={{display:'flex', justifyContent:'center'}}><button className='new_prod_btn'>Подробнее</button></a>
                            </div>
                        )}

                    </div>
                </div>
                

            </div>
            <div className='mobile_crs_new-prod'>
                <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'32px', zIndex:'100', paddingBottom:'1rem', paddingTop:'2rem'}}>Новинки</h1>
                <Carousel  autoPlay interval={7000} showIndicators={false} showArrows={true} width="100%" autoFocus={false}  showStatus={false} infiniteLoop={true} emulateTouch={true}>
                        <div>
                        {products.length > 0 && (
                                <div key={products[0].id}>
                                    <img
                                        src={products[0].images[0]}
                                        alt={`Product image ${products[0].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[0].name}</p>
                                    <a href="/product/1"><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}

                        </div>
                        <div>
                        {products.length > 1 && (
                                <div key={products[1].id}>
                                    <img
                                        src={products[1].images[0]}
                                        alt={`Product image ${products[1].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[1].name}</p>
                                    <a href="/product/2"><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}
                            
                        </div>
                        <div>
                        {products.length > 2 && (
                                <div key={products[2].id}>
                                    <img
                                        src={products[2].images[0]}
                                        alt={`Product image ${products[2].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[2].name}</p>
                                    <a href="/product/3"><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}
                            
                        </div>
                        <div>
                        {products.length > 3 && (
                                <div key={products[3].id}>
                                    <img
                                        src={products[3].images[0]}
                                        alt={`Product image ${products[3].id}`}
                                        style={{
                                            display: 'block',
                                            width: '300px',
                                            
                                            objectFit: 'cover',
                                            borderRadius: '15px'
                                        }}
                                    />
                                    <p>{products[3].name}</p>
                                    <a href="/product/4"><button className='new_prod_btn'>Подробнее</button></a>
                                </div>
                            )}
                            
                        </div>
                    </Carousel>
                </div>
        </>
    )

}


export default NewProduct
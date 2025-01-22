import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Убедитесь, что у вас есть импорт для Link
import Layout from '../../Layout';
import './FavoritePage.scss';
const FavoritesPage = (product) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites); // Устанавливаем избранные товары в состояние
    }, []);

    const handleFavoriteClick = (productId) => {
        const updatedFavorites = favorites.filter(item => item.id !== productId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites); // Обновляем состояние
    };



    

    return (
        <Layout>
            <div className='Favorite_full_page'>
                <h1>Избранные товары</h1>
                {favorites.length === 0 ? (
                <p style={{paddingBottom:'25%', marginTop:'5rem', textAlign:'center'}}>У вас нет избранных товаров.</p>
            ) : (
                <ul style={{ marginTop: '5rem', paddingBottom: '5%', }} >
                        {favorites.map((product) => {
                            return (
                                
                                    <li key={product.id} className='product-card1-fav'>
                                        

                                            <div className="product-img">
                                                <Link to={`/product/${product.id}`}><img src={product.images[0]} alt={product.name} style={{ width: "100%" }} /></Link>
                                            </div>
                                            <div className="product-description">
                                                <h3>{product.name}</h3>
                                                <p className="p_desc">{product.description}</p>
                                                <p className="p_price">{product.price} ₽</p>
                                                <div id='fav_btns' style={{display:'flex', justifyContent:'center'}}>
                                                    <button onClick={() => handleFavoriteClick(product.id)} style={{height:'40px', width:'25%'}} className='fav_btn'>
                                                        Удалить
                                                    </button>
                                                    <Link style={{width:'25%',marginLeft:'1rem'}} to={`/product/${product.id}`}><button  style={{width:'100%',height:'40px',}} className='fav_btn'>Подробнее</button></Link>
                                                </div>
                                            </div>
                                            
                                            
                                                

                                        
                                    </li>
                                
                            );
                        })}
                    </ul>
            )}
            </div>
        </Layout>
    );
};

export default FavoritesPage;
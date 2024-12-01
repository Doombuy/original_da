import Layout from "../../Layout"
import React, { useEffect, useState } from "react";
import Routers from "../../../../routes/Routes"
import {Helmet} from "react-helmet-async";
import Select, { components  } from 'react-select';

import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import './Catalog.Module.scss'
import { categoryOptions } from "./data";
import ProductTransition from "../../catalog_modules/ProductTransition";



const Catalog = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubSubCategories, setSelectedSubSubCategories] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [maxPrice, setMaxPrice] = useState(100000);

    
       
    
    const categories = [
        {
            name: 'Диваны и кресла',
            subcategories: [
                {
                    name: 'Чистое дерево',
                    subsubcategories: ['Подподкатегория 1', 'Подподкатегория 2']
                },
                {
                    name: 'Купе',
                    subsubcategories: ['Подподкатегория 3', 'Подподкатегория 4']
                },
                {
                    name: 'Угловые',
                    subsubcategories: ['Подподкатегория 5']
                },
            ],
        },
        {
            name: 'Шкафы и стеллажи',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
        {
            name: 'Гардеробные системы',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
        {
            name: 'Кровати',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
        {
            name: 'Кухни',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
        {
            name: 'Комоды',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
        {
            name: 'Прихожая',
            subcategories: [
                {
                    name: 'Стеллажи',
                    subsubcategories: ['Подподкатегория 6']
                },
                {
                    name: 'Комоды',
                    subsubcategories: ['Подподкатегория 7', 'Подподкатегория 8']
                },
            ],
        },
    ];
    
    

    useEffect(() => {
        fetch("/data.json")
        
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                setAllProducts(data);
                setFilteredProducts(data); // Изначально показываем все товары
            })
            .catch(error => {
                console.error("Fetch error: ", error);
            });
        }, []);


        useEffect(() => {
            if (allProducts && allProducts.length > 0) {
                const filtered = allProducts.filter(product => {
                    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase());
                    
                    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
                    const matchesSubCategory = selectedSubCategories.length === 0 || selectedSubCategories.includes(product.subcategory);
                    
                    const matchesPrice = product.price <= maxPrice;
                    return  matchesSearch && matchesCategory && matchesSubCategory && matchesPrice;
                });
            setFilteredProducts(filtered);
        }}, [  searchTerm, selectedCategories, selectedSubCategories, allProducts, maxPrice]);

    

    


        
        /*const filteredPrice = products.filter(product => product.price <= maxPrice);
        const handleMaxPriceChange = (e) => {
            const newMaxPrice = Number(e.target.value);
            //console.log("Обновление максимальной цены:", newMaxPrice); // Для отладки
            setMaxPrice(newMaxPrice); // Обновляем состояние
        };*/
    
        
    
        const handleSubCategorySelect = (subCategory) => {
            setSelectedSubCategories(prev => 
                prev.includes(subCategory)
                    ? prev.filter(name => name !== subCategory) // Удалить подкатегорию
                    : [...prev, subCategory] // Добавить подкатегорию
            );
        };
    
        const handleSubSubCategorySelect = (subSubCategory) => {
            setSelectedSubSubCategories(prev =>
                prev.includes(subSubCategory)
                    ? prev.filter(name => name !== subSubCategory) // Удалить подподкатегорию
                    : [...prev, subSubCategory] // Добавить подподкатегорию
            );
        };


        const handleCategorySelect = (category) => {
            setExpandedCategories((prev) => ({
                ...prev,
                [category]: !prev[category], // Переключение состояния для конкретной категории
            }));
        };
        
    
    
    
        

    
      
    return (
        <Layout>
                
                <div className='wrapper-inner-page'>
                    <header className="search">
                    <h1>Каталог</h1>  
                    <input
                        type="text"
                        id="search"
                        placeholder="Поиск..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        
                    />
                    
                    </header>
                    <main>
                    <section id="filters">
                     
                    {categories.map(category => (
                        
                        <div key={category.name} className={`filter-group ${expandedCategories[category.name] ? 'active' : ''}`}>
                            
                            <div className="filter-header" onClick={() => handleCategorySelect(category.name)}>
                                <span>{category.name}</span>
                            </div>
                            {expandedCategories[category.name] && (
                                <div className="filter-options">
                                    {category.subcategories.map(sub => (
                                        <div key={sub.name} className="checkbox-label" onClick={() => handleSubCategorySelect(sub.name)}>
                                            <span style={{ transition:  '0.4s ease', cursor: 'pointer', color: selectedSubCategories.includes(sub.name) ? "#af670e" : "#B6C1C2" }}>
                                                {sub.name}
                                            </span>
                                            {selectedSubCategories.includes(sub.name) && (
                                                <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>
                                                    {sub.subsubcategories.map(subsub => (
                                                        <div
                                                            key={subsub}
                                                            style={{
                                                                transition:  '0.4s ease',
                                                                cursor: 'pointer',
                                                                color: selectedSubSubCategories.includes(subsub) ? "#af670e" : "#B6C1C2"
                                                            }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleSubSubCategorySelect(subsub);
                                                            }}
                                                        >
                                                            {subsub}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        ))}
                        <div className="price-slider">
                            <h3>Максимальная цена: {maxPrice} ₽</h3>
                            <input
                                type="range"
                                min="0"
                                max="100000" // Установите максимальное значение по необходимости
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </section>
                    <section id="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Цена: {product.price} ₽</p>
                                <Link to={`/product/${product.id}`}><button className="btnr">Подробнее</button></Link>
                            </div>
                        ))
                    ) : (
                        <p style={{
                            fontSize: "18px",
                            textAlign: 'center',
                            color: '#B6C1C2',
                            marginRight: '40%'
                        }}>Нет доступных продуктов по данной цене!</p>
                    )}
                    </section>
                    </main>
                </div>
        </Layout>
    );
};

export default Catalog;

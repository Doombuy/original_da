import Layout from "../../Layout";
import { useRouteError } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import  './premiumCatalog.Module.scss';
import Slider from 'react-slider';

const Premium = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubSubCategories, setSelectedSubSubCategories] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Состояние для управления видимостью
    const [isAnimating, setIsAnimating] = useState(false);

    
    const menuRef = useRef();

    const toggleMobileMenu = () => {
        setIsAnimating(true);
        setIsMobileMenuOpen(prev => !prev);
    };


    const closeMenu = () => {
        setIsMobileMenuOpen(false); // Закрытие меню
    };

    // Обработчик клика вне меню
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu(); // Закрываем меню, если клик был вне
        }
    };
    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsAnimating(true);
        } else {
            const timeout = setTimeout(() => setIsAnimating(false), 300); // Время должно соответствовать вашей анимации
            return () => clearTimeout(timeout); // Чистим таймаут
        }
    }, [isMobileMenuOpen]);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); // Добавляем обработчик при монтировании
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Убираем обработчик при размонтировании
        };
    }, []); // Пустой массив зависимостей, чтобы сработал один раз
    
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
                    
                    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
                    return  matchesSearch && matchesCategory && matchesSubCategory && matchesPrice;
                });
            setFilteredProducts(filtered);
        }}, [  searchTerm, selectedCategories, selectedSubCategories, allProducts, maxPrice, minPrice]);

    

    


        
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
        
    
    

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Показываем кнопку, если прокрутка больше 500 пикселей
        if (scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Плавный скролл
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        

    
      
    return (
        <Layout>
            {isVisible && (
                <button 
                id="top_btn"
                    onClick={scrollToTop}
                    style={{
                        width:'10rem',
                        height:'2rem',
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        transition: 'all 0.8s ease',
                        padding: '10px 15px',
                        backgroundColor: '#af670e',
                        color: '#B6C1C2',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Наверх
                </button>
            )}
                
                <div className='wrapper-inner-page'>
                    <header className="search">
                    <h1 className="desc_p_prod">Премиум</h1>  
                    <button className='mobileFilters' >
                        <img src="/public/images/filters.png" alt="" onClick={toggleMobileMenu} />
                    </button>
                    <input
                        type="text"
                        id="search"
                        placeholder="Поиск..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        
                    />
                    
                    </header>
                    <main>
                    <section id="filters_mob" ref={menuRef} className={`filters_mob ${isMobileMenuOpen ? 'catalog_active' : ''}`}>
                    <div>
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
                                                        <div style={{ paddingLeft: '20px', paddingTop: '0' }}>
                                                            {sub.subsubcategories.map(subsub => (
                                                                <div
                                                                    key={subsub}
                                                                    style={{
                                                                        paddingTop:'15px',
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
                        </div>
                        <div className="price-slider">
                            <h3>Фильтрация по цене</h3>
                            <Slider
                                min={0}
                                max={100000}
                                value={[minPrice, maxPrice]}
                                onChange={(values) => {
                                setMinPrice(values[0]);
                                setMaxPrice(values[1]);
                                }}
                                renderThumb={(props) => <div {...props} className="thumb1" />}
                                
                                


                            ></Slider>
                            <div className="diapozon">
                                <p id="price_p">Price:</p>
                                <p>{minPrice} ₽ — {maxPrice} ₽ </p>
                            </div>
                        </div>
                        <button onClick={toggleMobileMenu} style={{height:'45px',bottom:'80px', position:'absolute', width:'70%', marginLeft:'15%' }}>Закрыть</button>
                    </section>
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
                            <h3>Фильтрация по цене</h3>
                            <Slider
                                min={0}
                                max={100000}
                                value={[minPrice, maxPrice]}
                                onChange={(values) => {
                                setMinPrice(values[0]);
                                setMaxPrice(values[1]);
                                }}
                                renderThumb={(props) => <div {...props} className="thumb1" />}
                                
                                


                            ></Slider>
                            <div className="diapozon">
                                <p id="price_p">Price:</p>
                                <p>{minPrice} ₽ — {maxPrice} ₽ </p>
                            </div>
                        </div>
                    </section>
                    <section id="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="product-card1" key={product.id}>
                                <div className="product-img">
                                    <Link to={`/product/${product.id}`}><img src={product.images[0]} alt={product.name} style={{ width: "100%" , height:'100%'}} /></Link>
                                </div>
                                

                                <div className="product-description">
                                    <h3>{product.name}</h3>
                                    <p className="p_desc">{product.description}</p>
                                    <p className="p_price">{product.price} ₽</p>
                                    <Link to={`/product/${product.id}`}><button className="btnr1">Подробнее</button></Link>
                                </div>
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
export default Premium;
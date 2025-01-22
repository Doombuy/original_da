import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import './ProductTransition.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // требует загрузчик
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const ProductTransition = ({ products }) => {
  const { id } = useParams(); // Получаем параметр id из URL
  const product = products.find(prod => prod.id === parseInt(id)); // Ищем продукт по id

  // Если продукт не найден, отобразите сообщение
  if (!product) {
    return <h2>Продукт не найден</h2>;
  }
  const [isFavorited, setIsFavorited] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false); 
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7');
  const [message, setMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isProductFavorited = favorites.some(item => item.id === product.id);
    setIsFavorited(isProductFavorited);
}, [product.id]);

const addToFavorites = (newProduct) => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Проверяем, существует ли уже в избранном
    if (!savedFavorites.some(item => item.id === newProduct.id)) {
        savedFavorites.push(newProduct);
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }
};

const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorited) {
        // Удаляем товар из избранного
        const updatedFavorites = favorites.filter(item => item.id !== product.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
        // Добавляем товар в избранное
        addToFavorites(product); // Сохраняем весь объект товара
    }

    setIsFavorited(!isFavorited);
};

const scrollToElement = (elementID) =>{
  const element = document.getElementById(elementID);
  if (element){
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };





const toggleFullDescription = () => {
  setIsFullDescriptionVisible((prev) => !prev); // Переключение видимости полного текста
};

const maxLength = 400;  

const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Получаем текущее положение прокрутки
    const scrollY = window.scrollY;

    // Если прокрутка больше или равна 50 пикселей, делаем кнопку фиксированной
    if (scrollY >= 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Убираем обработчик при размонтировании
    };
  }, []);

  const openRequestModal = () => {
    setIsRequestModalOpen(true);
};

const handleSubmitRequest = (e) => {
    e.preventDefault();
    const requestData = {
        name,
        phone,
        message,
        product: product.name,
    };
    setIsRequestModalOpen(false);
    setIsSuccessModalOpen(true);
    alert(JSON.stringify(requestData, null, 2));
    // Здесь вы можете отправить requestData на сервер, например, с помощью fetch или axios
    
    
    
    
    setName('');
    setPhone('');
    setMessage('');




    const maxChars = 11;
  const input = document.querySelector('.input_phone');

  input.addEventListener('keydown', function() {
    if (this.value.length >= maxChars) {
      this.value = this.value.substr(0, maxChars);
    }
  });

  input.addEventListener('keyup', function() {
    if (this.value.length >= maxChars) {
      this.value = this.value.substr(0, maxChars);
    }
  });
};

const closeSuccessModal = () => {
  setIsSuccessModalOpen(false);
};


const formatPhone = (value) => {
  // Удаляем все нецифровые символы
  const cleaned = value.replace(/\D/g, '');

  // Ограничиваем длину до 10 цифр после кода страны
  const formattedValue = cleaned.length > 12 ? cleaned.slice(0, 12) : cleaned;

  // Форматируем номер
  const match = formattedValue.match(/^(7)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) return value;

  const [, , areaCode, centralOfficeCode, line1, line2] = match;

  let result = '+7 ';
  if (areaCode) result += `(${areaCode}`;
  if (centralOfficeCode) result += `) ${centralOfficeCode}`;
  if (line1) result += `-${line1}`;
  if (line2) result += `-${line2}`;

  return result.trim();
};

const handlePhoneChange = (e) => {
  const value = e.target.value;

  // Если превышает 16 символов, игнорировать
  if (value.length > 18) {
      return;
  }

  // Запрещаем вводить буквы
  const cleanValue = value.replace(/[^0-9+()\-\s]/g, ''); // Позволить только цифры, +, (, ), -, пробелы

  // Если пользователь пытается удалить все символы после '+7 ', сбрасываем поле
  if (cleanValue === '+7 ' || cleanValue === '+7') {
      setPhone('+7 ');
  } else {
      setPhone(formatPhone(cleanValue));
  }
};





  

  return (
    <Layout>
      <div className='backbtn'  style={{position: isFixed ? 'fixed' : 'absolute',  top: isFixed ? '20px' : 'auto',}} >
        <Link to='/Catalog'><img src="/public/images/back_button.png" alt="" /></Link>
      </div>
      
      <div className='ProductPage'>
        <div className='carousel2'>
          <Carousel className='crsrooot' showIndicators={false} showArrows={true} width="100%" autoFocus={false}  showStatus={false} infiniteLoop={true} emulateTouch={true} >
            {product.images.map((imgSrc, index) => ( // Используем product.image, чтобы отобразить все изображения
              <div key={index} onClick={() => openModal(index)} style={{height:'100%'}}>
                <img  src={imgSrc} alt={`Product image ${index += 1}`} style={{borderRadius: "5px", height:'100%'}}/>
              </div>
            ))}
          </Carousel>
        </div>
        
        <div className='request'>
          <h1>{product.name},  {product.description}</h1>
          <p className='price'>{product.price} ₽</p>
          <div style={{display:"flex"}}>
            <button className="requestButton" onClick={openRequestModal}>Отправить заявку</button>
            <button className="favorite-button" id="favoriteButton" onClick={handleFavoriteClick} >
            <img 
                id="favoriteIcon" 
                src={isFavorited ? "/public/images/heart.png" : "/public/images/emptyheart.png"}
                alt="Избранное"
                className={`favorite-image ${isFavorited ? 'favorited' : ''}`}
            />
        </button>
          </div>
          <p className='moredetails' onClick={() => scrollToElement('char')}> Описание ▼</p>
        </div>
        {isRequestModalOpen && (
                    <div className="modal_open_request">
                        <div className='hzr' onClick={() => setIsRequestModalOpen(false)}></div>
                        <div className='hzr1' onClick={() => setIsRequestModalOpen(false)}></div>
                        <div className='hzr2' onClick={() => setIsRequestModalOpen(false)}></div>
                        <div className='hzr3' onClick={() => setIsRequestModalOpen(false)}></div>
                        <div className='modal-content' >
                            <span className="close" onClick={() => setIsRequestModalOpen(false)}>&times;</span>
                            <h2 style={{marginTop:'0.5rem',textAlign:'center', zIndex:'10000', color:'#c1cacb', fontWeight:'450'}}>Оставить заявку</h2>
                            <div style={{display:'flex', paddingLeft:'15%'}}>
                              <p style={{paddingTop:'2rem', opacity:'0.8'}}>Выбранный товар: </p>
                              <p style={{paddingTop:'2rem', paddingLeft:'0.5rem'}}>{product.name}</p></div>
                            <form onSubmit={handleSubmitRequest} >
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    
                                    <input
                                        style={{color:'#c1cacb',boxSizing: 'border-box',width:'70%' }}
                                        placeholder='Ваше имя'
                                        maxLength="22"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center'}}>
                            
                                    <input className='input_phone'
                                        style={{color:'#c1cacb',  boxSizing: 'border-box',width:'70%'}}
                                        placeholder='Телефон'
                                        type="tel"
                                        
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                </div>
                                
                                <div style={{display:'flex', justifyContent:'center', paddingTop:'1rem'}}>
                                    
                                    <textarea
                                        maxLength='300'
                                                                                
                                        placeholder='Комментарий'
                                        style={{boxSizing: 'border-box',fontSize:'15px',color:'#c1cacb',width:'70%', resize:'none', height:'7rem', borderRadius:'10px',backgroundColor:"#222222"}}
                                        value={message} 
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center', paddingBottom:'1rem'}}>
                                  <button className="requestButton_modal" style={{width:'50% !important'}} type="submit">Отправить заявку</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        
        
        {/* Модальное окно для отображения изображения */}
        {isModalOpen && (
                      <div className="modal open">
                        <div className='hzr' onClick={closeModal}></div>
                        <div className='hzr1' onClick={closeModal}></div>
                        <div className='hzr2' onClick={closeModal}></div>
                        <div className='hzr3' onClick={closeModal}></div>
                        <span className="close" onClick={closeModal}>&times;</span>
                        
                        <Carousel className='crs-root' showIndicators={false} showArrows={true} width="100%" autoFocus={false}  showStatus={false} infiniteLoop={true} emulateTouch={true} >
                          {product.images.map((imgSrc, index) => ( // Используем product.image, чтобы отобразить все изображения
                            <div style={{height:'100%'}} key={index} onClick={() => openModal(index)}>
                              <img className='crs_prod_trans' src={imgSrc} alt={`Product image ${index += 1}`}/>
                            </div>
                          ))}
                        </Carousel>
                        
                    </div>
        )}
        {/* Если есть фильтры, отобразите их */}
        {product.filters && product.filters.length > 0 && (
          <div className="filters">
            <h3>Фильтры</h3>
            {product.filters.map((filter, index) => (
              <div key={index} className="filter">
                {filter.name}: {filter.value}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='flexes' >
        <div className='characteristics' id='char'>
          <div className='obj'>
            <h1>Технические характеристи для {product.model} </h1>
          </div>
          <div style={{display:"flex"}}>
            <div className='charleft'>
              {product.charname.map((charSrc, index) => (
                <div key={index} className='char-item'>{charSrc}</div>
              ))}
            </div>
            <div className='charright'>
              {product.chardesc.map((chardescSrc, index) => (
                <div key={index} className='char-item'>{chardescSrc}</div>
              ))}

            </div>
          </div>
        </div>
        {isSuccessModalOpen && (
                <div className="modal open">
                    <div className='hzr' onClick={closeSuccessModal}></div>
                    <div className='modal-content'>
                        <span className="close" onClick={closeSuccessModal}>&times;</span>
                        <h2>Заявка отправлена!</h2>
                        <p>Ваша заявка успешно отправлена.</p>
                        
                        <button id='requestButton_double_modal' onClick={closeSuccessModal}>Закрыть</button>
                    </div>
                </div>
            )}
        <div className='description' id='flexes'>
            <h1>{product.name},  {product.description}</h1>
            
            <p style={{position: "relative"}} className='table-decs'>
              {isFullDescriptionVisible 
                ? product.detaileddescription 
                : product.detaileddescription.length > maxLength
                  ? product.detaileddescription.slice(0, maxLength) + '...'
                  : product.detaileddescription
              }
              <span id='spanchik' onClick={toggleFullDescription} >
                {isFullDescriptionVisible ? ' ▲ Скрыть' : ' ▼ Подробнее'}
              </span>
            </p>
              

            
        </div>
      </div>
    </Layout>
  );
};

export default ProductTransition

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  '../carousel/GeneralCarouselModule.scss'
import { Link } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import NewProduct from '../new_product/NewProduct';
const GeneralCarousel = (product) =>{
    
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [IsReloadModalOpen, setIsReloadModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [message, setMessage] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Состояние для второго модального окна

    const productIds = [1, 2, 4]; 
    const productIdsN = [1,2,3];

    const openRequestModal  = () => {
        setIsRequestModalOpen(true);
    };
    const openReloadModal = () => {
        setIsReloadModalOpen(true);

    };
    
    const handleSubmitRequest = (e) => {
        e.preventDefault();
        const requestData = {
            name,
            phone,
            message,
            product: product.name,


            
        };
        setIsRequestModalOpen(false); // Закрыть первое модальное окно
        setIsSuccessModalOpen(true); // Открыть второе модальное окно
        
        alert(JSON.stringify(requestData, null, 2));
        // Здесь вы можете отправить requestData на сервер, например, с помощью fetch или axios
        setIsRequestModalOpen(false);
        setIsReloadModalOpen(false);
        setName('');
        setPhone('');
        setMessage('');
        
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
    return(
        <>  
        <div className='carousel_home'>
            <div id='Imgcrls'>
                
                <Carousel swipeable={false} style={{width:'90%',display: 'flex',marginLeft: '5%'}} id='carausel_general' dynamicHeight={false}  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                    <div>
                        <img id='crs-dga' src="/public/images/crs_home_first_1page.png"  style={{}} />
                        
                    </div>
                    <div>
                        <img id='crs-dga' src="/public/images/crs_home_first_2page.jpg" style={{}}/>
                        
                    </div>
                    <div>
                        <img id='crs-dga' src="/public/images/crs_home_first_3page.jpg"style={{}}/>
                        
                    </div>
                </Carousel>
            </div>
            <div id='Txtcrls'>
                <Carousel style={{borderRadius:'0 15px 15px 0'}} dynamicHeight={false} swipeable={false}   autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                    <div id='txtdiv' style={{borderRadius:'0 15px 15px 0'}}>
                        <img src="" alt="" style={{display:'none'}}/>
                        <div id="txtdiv_d"style={{justifyContent:'center',display:'flex', alignItems:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Мы открылись</h1>
                                <p style={{textAlign:'center',}}>г. Владикавказ, пр-к Мира 69</p>
                                <div style={{display:'flex', justifyContent:'left', width:'100%'}}><a style={{width:'100%'}} href='/aboutus'><button className='crs_btn_home'>Подробнее</button></a></div>
                            </div>
                        </div>
                    </div>
                    <div id='txtdiv' style={{borderRadius:'0 15px 15px 0'}}>
                        <img src="" alt="" style={{display:'none'}}/>
                        <div id="txtdiv_d"style={{justifyContent:'center',display:'flex', alignItems:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Новая коллекция мебели премиум-класса</h1>
                                <p id="pc_crs"style={{textAlign:'center'}}>Перейдите в наш премиум-каталог, для просмотра всей нашей линейки.</p>
                                <p id="m_crs"style={{display:'none'}}>Перейдите в наш премиум-каталог</p>
                                <div style={{display:'flex', justifyContent:'center', width:'100%'}}><a style={{width:'100%'}} href='/premiumCatalog'><button className='crs_btn_home'>Подробнее</button></a></div>
                            </div>
                        </div>
                    </div>
                    <div id='txtdiv' style={{borderRadius:'0 15px 15px 0'}}>
                        <img src="" alt="" style={{display:'none'}}/>
                        <div id="txtdiv_d"style={{justifyContent:'center',display:'flex', alignItems:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Закажите обратный звонок</h1>
                                <p id="pc_crs" style={{textAlign:'center'}}>
                                    Не можете определится или есть другие вопросы? Оставляйте заявку на обратный звонок, и наши специалисты вас проконсультируют!
                                </p>
                                <p id="m_crs"style={{display:'none'}}>Не можете определится или есть другие вопросы?</p>
                                <div style={{display:'flex', justifyContent:'center', width:'100%'}}><button onClick={openReloadModal} className='crs_btn_home'>Обратный звонок</button></div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
        {IsReloadModalOpen && (
                    <div className="modal_open_request">
                        <div className='hzr' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr1' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr2' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr3' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='modal-content' >
                            <span className="close" onClick={() => setIsReloadModalOpen(false)}>&times;</span>
                            <h2 style={{marginTop:'0.5rem',textAlign:'center', zIndex:'10000', color:'#c1cacb', fontWeight:'450'}}>Обратный звонок</h2>
                            
                            <form onSubmit={handleSubmitRequest} >
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    
                                    <input
                                        style={{opacity:'0.7',width:'70%',boxSizing: 'border-box', position:'relative', paddingLeft:'15px' }}
                                        placeholder='Ваше имя'
                                        maxLength='22'
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center'}}>
                            
                                    <input
                                        style={{width:'70%', boxSizing: 'border-box', position:'relative', paddingLeft:'15px', opacity:'0.7'}}
                                        placeholder='Телефон'
                                        type="tel"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'1rem'}}><p style={{fontSize:'14px', opacity:'0.5', textAlign:'center',}}>Ожидайте звонок в течении пары часов</p></div>
                                <div style={{display:'flex', justifyContent:'center', paddingBottom:'1rem'}}>
                                  <button  className="requestButton_modal" style={{width:'50% !important'}} type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}




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
        <NewProduct productIdsN={productIdsN}/>
        <h1 style={{textAlign:'center', paddingTop:'2rem', fontSize:'32px', fontWeight:'500'}}>Популярное</h1>
        <div className='carousel_home_second'>
            <div id='Imgcrls'> 
                        
                            <ProductCarousel productIds={productIds} />
                       
                    </div>
            <div id='Txtcrls' style={{borderRadius:'0 0 0 0'}}>
                <Carousel dynamicHeight={false}  swipeable={false}  autoPlay stopOnHover={false} infiniteLoop autoFocus={true} interval={7000} showArrows={false}  width={'100%'} showIndicators={false} showStatus={false} showThumbs={false}>
                   
                
                    <div id='txtdiv' style={{borderRadius:'0'}}>
                        <img src="" alt=""  style={{display:'none'}}/>
                        <div  style={{alignItems:'center',display:'flex', justifyContent:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Коллекция Lorem</h1>
                                <p id='p_pc' style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec feugiat lectus. Nam porta leo est. Fusce est neque, pellentesque in lorem eget, sagittis interdum magna.</p>
                                <p id="p_mb" style={{textAlign:'center'}}>Lorem ipsum dolor...</p>
                                <div style={{display:'flex', justifyContent:'left', width:'100%'}}><a style={{width:'100%'}}  href={`/product/1`}><button  className='crs_btn_home'>Подробнее</button></a></div>
                            </div>
                        </div>
                    </div>
                    <div id='txtdiv' style={{borderRadius:'0'}}>
                        <img src="" alt="" style={{display:'none'}}/>
                        <div  style={{alignItems:'center',display:'flex', justifyContent:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Diamond</h1>
                                <p id='p_pc' style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec feugiat lectus. Nam porta leo est. Fusce est neque, pellentesque in lorem eget, sagittis interdum magna.</p>
                                <p id="p_mb" style={{textAlign:'center'}}>Lorem ipsum dolor...</p>
                                <div style={{display:'flex', justifyContent:'left', width:'100%'}}><a style={{width:'100%'}}  href={`/product/2`}><button  className='crs_btn_home'>Подробнее</button></a></div>
                            </div>
                        </div>
                    </div>
                    <div id='txtdiv' style={{borderRadius:'0'}}>
                        <img src="" alt="" style={{display:'none'}}/>
                        <div  style={{alignItems:'center', display:'flex', justifyContent:'center', width:'100%', height:'100%', position:'absolute'}}>
                            <div style={{}}>
                                <h1 style={{textAlign:'center'}}>Gold Star</h1>
                                <p id='p_pc' style={{textAlign:'center', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec feugiat lectus. Nam porta leo est. Fusce est neque, pellentesque in lorem eget, sagittis interdum magna.</p>
                                <p id="p_mb" style={{textAlign:'center'}}>Lorem ipsum dolor...</p>
                                <div style={{display:'flex', justifyContent:'left', width:'100%'}}><a style={{width:'100%'}}  href={`/product/4`}><button  className='crs_btn_home'>Подробнее</button></a></div>
                            </div>
                        </div>
                    </div>
                
                </Carousel>
            </div>
            
            
        </div>

        </>
    )
}
export default GeneralCarousel
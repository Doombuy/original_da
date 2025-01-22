import styles from './Header.module.scss'
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Routers from '../../../routes/Routes';




const Header =( product )=>{

    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [IsReloadModalOpen, setIsReloadModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [message, setMessage] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Состояние для второго модального окна
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




    
    
    


    
    
    return (
        <div className={styles.header}>
                <div className={styles.anti_header}>
                    <div className={styles.bott_header1}>
                        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                        <img src="/public/images/menu_brg.png" alt="" />
                        </button>
                        
                        <ul ref={menuRef} className={`${styles.mobile_menu} ${isMobileMenuOpen ? styles.active : ''}`}>
                            <Link to="/" data-text="Главная"><li className={styles.li_top}>Главная</li></Link>
                            <Link to="/catalog" data-text="Каталог"><li>Каталог</li></Link>
                            <Link to="/premiumcatalog" data-text="Премиум"><li>Премиум</li></Link>
                            <Link to="/favoritepage" data-text="Избранное"><li>Избранное</li></Link>
                            <Link to="/aboutus" data-text="О нас"><li>О нас</li></Link>
                            <a href="https://www.instagram.com/"><li>Instagram</li></a>
                            <a href="https://blog.whatsapp.com/whats-app-web?lang=ru_RU"><li>WhatsApp</li></a>
                            <a href="https://web.telegram.org/z/"><li>Telegram</li></a>
                            <a href="https://www.viber.com/ru/"><li>Viber</li></a>
                            
                            <li className={isMobileMenuOpen ? styles.number_rev_m : styles.number_rev_m_n}><Link to="tel:+79604061666" data-text="+7 (960) 406-16-66">+7 (960) 406-16-66</Link></li>
                            
                        </ul>
                        <ul ref={menuRef} className={styles.general_menu1} >
                            <li><Link to="/" data-text="Главная">Главная</Link></li>
                            <li><Link to="/catalog" data-text="Каталог">Каталог</Link></li>
                            <li><Link to="/premiumcatalog" data-text="Премиум">Премиум</Link></li>
                            <li><Link to="/favoritepage" data-text="Избранное">Избранное</Link></li>
                            <li><Link to="/aboutus" data-text="О нас">О нас</Link></li>
                            
                            <li className={isMobileMenuOpen ? styles.number_rev_m : styles.number_rev_m_n}><Link to="tel:+79604061666" data-text="+7 (960) 406-16-66">+7 (960) 406-16-66</Link></li>
                            
                        </ul>
                    
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
                            
                            <form onSubmit={handleSubmitRequest} >
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    
                                    <input
                                        style={{opacity:'0.7',width:'70%',boxSizing: 'border-box', position:'relative', paddingLeft:'15px'}}
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
                                        style={{width:'70%',  opacity:'0.7',boxSizing: 'border-box', position:'relative', paddingLeft:'15px'}}
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
                                        style={{opacity:'0.7',fontSize:'15px',color:'#c1cacb',width:'70%', resize:'none', height:'7rem', borderRadius:'10px',boxSizing: 'border-box', position:'relative', paddingLeft:'15px', backgroundColor:"#222222"}}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center', paddingBottom:'1rem'}}>
                                  <button className="requestButton_modal" style={{width:'50% !important'}} type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {IsReloadModalOpen && (
                    <div className="modal_open_request">
                        <div className='hzr' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr1' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr2' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='hzr3' onClick={() => setIsReloadModalOpen(false)}></div>
                        <div className='modal-content' >
                            <span className="close" onClick={() => setIsReloadModalOpen(false)}>&times;</span>
                            <h2 style={{marginTop:'0.5rem',textAlign:'center', zIndex:'10000', color:'#c1cacb', fontWeight:'450'}}>Оставить заявку</h2>
                            
                            <form onSubmit={handleSubmitRequest} >
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    
                                    <input
                                        style={{opacity:'0.7',width:'70%',padding:'3px' }}
                                        placeholder='Ваше имя'
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center'}}>
                            
                                    <input
                                        style={{width:'70%', padding:'3px', opacity:'0.7'}}
                                        placeholder='Телефон'
                                        type="number"
                                        value='+7'
                                        onChange={(e) => setPhone(e.target.value)}
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


                    
                    <div className={styles.logo_div}>
                        <Link to="/"><img className={styles.logo} src="../../../../public/images/logo_da.jpg" alt="" /></Link>
                    </div>
                    <div className={styles.our_contact}>
                        <div className={styles.reverse_call}>
                            <div className={styles.number_rev}><Link to="tel:+79604061666" data-text="+7 (960) 406-16-66">+7 (960) 406-16-66</Link></div>
                            <div><Link onClick={openReloadModal} data-text="заказать обратный звонок">заказать обратный звонок</Link></div>
                        </div>
                        <div className={styles.application}>
                            <Link onClick={openRequestModal}><button>Оставить заявку</button></Link>

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
                
                <div className={styles.full_header}>

                </div>
            </div>
        </div>
                

                




                
        
            
        
)
}


<Routers/>
export default Header

/*import { useNavigate } from 'react-router-dom'*/
import '../../../../assets/styles/index.scss'
import Layout from '../../Layout'
import {Helmet} from "react-helmet";
import './Home.Module.scss'
import React, { useEffect } from 'react';
import { useState } from 'react';
import GeneralCarousel from '../../carousel/GeneralCarousel'
import Routers from '../../../../routes/Routes';
import GeneralForm from '../../any_questions/GeneralForm';
import { Link, Outlet, useLocation } from 'react-router-dom';
import TopProduct from '../../top_product/TopProduct';

function Home(product) {
	const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [IsReloadModalOpen, setIsReloadModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [message, setMessage] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Состояние для второго модального окна

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
		<Layout>
			<Helmet>
				<meta charset="UTF-8" />
    			<link rel="icon" type="image/svg+xml" href="../../../../../public/images/HD-wallpaper-artistic-house.jpg" />
    			<title>Главная</title>
            </Helmet>
			<div className='full_header'>
				<div className='typed'>
					<h1>Дизайнерская</h1>
				
					<div className='container'>
						<h1>мебель на заказ</h1>
						<div className='typed_out'>
							<h1>по всей России</h1>
						</div>
					</div>
				</div>
				<div className='id2'>
					<div className='id_23'>
						<h2>Спроектируем, изготовим и установим <br/> корпусную мебель и кухни любой сложности.</h2>
					</div>
					<div className="id_24">
						<Link onClick={openRequestModal}><button className='id_24_1'>Оставить заявку</button></Link>
					</div>
				</div>
				<div className="three">
					<div className='three1'>
						<h2 id='title_hom'>от 14 дней</h2>
						<p id='title_hom'>на изготовление мебели</p>
					</div>
					<div className='three2'>
						<h2 id='title_hom'>36 месяцев</h2>
						<p id='title_hom'>гарантии на продукцию</p>
					</div>
					<div className='three3'>
						<h2 id='title_hom'>Бесплатный</h2>
						<p id='title_hom'>выезд мастера </p>

					</div>
				</div>
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
										maxLength='22'
                                        style={{boxSizing: 'border-box', position:'relative', paddingLeft:'15px',opacity:'0.7',width:'70%' }}
                                        placeholder='Ваше имя'
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center'}}>
                            
                                    <input
										className='input_phone'
                                        style={{boxSizing: 'border-box', position:'relative', paddingLeft:'15px',width:'70%', opacity:'0.7'}}
                                        placeholder='Телефон'
                                        type="tel"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                </div>
                                <div style={{display:'flex', justifyContent:'center', paddingTop:'1rem'}}>
                                    
                                    <textarea
                                        
                                        placeholder='Комментарий'
                                        style={{boxSizing: 'border-box', position:'relative', paddingLeft:'15px',opacity:'0.8',fontSize:'15px',color:'#c1cacb',width:'70%', resize:'none', height:'7rem', borderRadius:'10px',  backgroundColor:"#222222"}}
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

			<div className="carousel1">
				<GeneralCarousel/>
			</div>
			
			
            
        


		</Layout>
	)
	
}

export default Home
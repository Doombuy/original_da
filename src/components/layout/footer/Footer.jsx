import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Footer.scss'

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='general_slice'>
                <div className='contacts'>
                    <h1>8 960 406 16 66</h1>
                    <h1>glebdzusovofficial@gmail.com</h1>
                    
                </div>
                <div className='footer_menu'>
                    <ul id='footer_module'>
                        <li>Типовые проекты</li>
                        <li>Партнёрам</li>
                        <li>Контакты</li>
                        <li>Портфолио</li>
                    </ul>
                    <ul id='footer_share'>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Telegram</li>
                        <li>Viber</li>
                    </ul>
                </div>
            </div>
            <div className='minor_slice'>
                <p id='corparation'>@ 2023-2024 DA Company, ООО «ДиЭй Компани»</p>
                <p id='police_conf'>Политика конфиденциальности</p>
                <p id='error_site'>Ошибка на сайте</p>
            </div>
        </div>
    )
}

export default Footer
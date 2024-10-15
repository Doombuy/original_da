import styles from './Header.module.scss'
import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


const Header =()=>{
    return (
            <div className={styles.header}>
                <div className={styles.full_header}>
                    <div className={styles.top_header}>
                        <ul className={styles.top_menu}>
                            <li>О нас</li>
                            <li>Контакты</li>
                            <li>Вход</li>
                            <li>Регистация</li>
                        </ul>
                    </div>
                    <div className={styles.bott_header}>
                        <ul className={styles.general_menu}>
                            <li>Главная</li>
                            <li>Каталог</li>
                            <li>Премиум</li>
                            <li>Обратная связь</li>        
                        </ul>
                        
                    </div>
                </div>
            </div>
        
)
}
export default Header

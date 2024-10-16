import styles from './Header.module.scss'
import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Routers from '../../../routes/Routes';
const Header =()=>{
    return (
            <div className={styles.header}>
                <div className={styles.full_header}>
                    <div className={styles.top_header}>
                        <ul className={styles.top_menu}>
                            <Link to="*"><li>О нас</li></Link>
                            <Link to="*"><li>Контакты</li></Link>
                            <Link to="*"><li>Вход</li></Link>
                            <Link to="*"><li>Регистация</li></Link>
                        </ul>
                    </div>
                    <div className={styles.bott_header}>
                        <ul className={styles.general_menu}>
                            <Link to="/"><li>Главная</li></Link>
                            <Link to="/Catalog"><li>Каталог</li></Link>
                            <Link to="*"><li>Премиум</li></Link>
                            <Link to="*"><li>Обратная связь</li></Link>    
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        
)
}
<Routers/>
export default Header

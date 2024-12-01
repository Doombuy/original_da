import styles from './Header.module.scss'
import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Routers from '../../../routes/Routes';
const Header =()=>{
    return (
            <div className={styles.header}>
                <div className={styles.anti_header}>
                    <div className={styles.bott_header1}>
                        <ul className={styles.general_menu1}>
                            <li ><Link to="/" data-text="Главная">Главная</Link></li>
                            <li ><Link to="/Catalog" data-text="Каталог">Каталог</Link></li>
                            <li ><Link to="*" data-text="Премиум">Премиум</Link></li>
                            <li ><Link to="*" data-text="О нас">О нас</Link></li>
                              
                        </ul>   
                        
                    </div>
                    <div className={styles.logo_div}>
                        <Link to="/"><img className={styles.logo} src="../../../../public/images/logo_da.jpg" alt="" /></Link>
                    </div>
                    <div className={styles.our_contact}>
                        <div className={styles.reverse_call}>
                            <div className={styles.number_rev}><Link to="/" data-text="+7 (960) 406-16-66">+7 (960) 406-16-66</Link></div>
                            <div><Link to="/" data-text="заказать обратный звонок">заказать обратный звонок</Link></div>
                        </div>
                        <div className={styles.application}>
                            <Link to="/"><button>Оставить заявку</button></Link>

                        </div>
                    </div>
                </div>
                <div className={styles.full_header}>

                </div>
            </div>
            
        
)
}

/*              <div className={styles.full_header}>
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
                </div>*/ 
<Routers/>
export default Header

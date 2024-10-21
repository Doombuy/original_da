import Header from "./header/Header"
import styles from './Layout.module.scss'
import cn from 'clsx'
import Home from "./screens/home/Home"
import Footer from "./footer/Footer"
const Layout =({children, bgImage, heading = '', backLink = '/' }) =>{
    return (
        <div className={styles.full_screen}>
            <section
                    className={cn(styles.wrapper, {
                        [styles.otherPage]: !!heading
                    })}
                    >
                
                    <Header  />
                    {heading && <h1 className={styles.heading}>{heading}</h1>}
                    {children && <div>{children}</div>}
                    <Footer/>
                
            </section>
        </div>
        
    )  
}
export default Layout
/*import { useNavigate } from 'react-router-dom'*/
import '../../../../assets/styles/index.scss'
import Layout from '../../Layout'
import {Helmet} from "react-helmet";
import './Home.Module.scss'
import GeneralCarousel from '../../carousel/GeneralCarousel'
import Routers from '../../../../routes/Routes';
import GeneralForm from '../../any_questions/GeneralForm';
import { Link, Outlet, useLocation } from 'react-router-dom';
import TopProduct from '../../top_product/TopProduct';

function Home() {
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
						<Link to="/"><button className='id_24_1'>Оставить заявку</button></Link>
					</div>
				</div>
				<div className="three">
					<div className='three1'>
						<h2>от 14 дней</h2>
						<p>на изготовление мебели</p>
					</div>
					<div className='three2'>
						<h2>36 месяцев</h2>
						<p>гарантии на продукцию</p>
					</div>
					<div className='three3'>
						<h2>Бесплатный</h2>
						<p>выезд мастера - замерщика</p>

					</div>
				</div>
            </div>

			<div className="carousel1">
				<GeneralCarousel/>
			</div>
			<div className="carousel2">
				<TopProduct/>
			</div>
			<div className="general_form">
				<GeneralForm/>
				<div className='form_image'>
					<img src="/public/images/questions_man.svg" alt="" />
				</div>
			</div>
            
        


		</Layout>
	)
}

export default Home
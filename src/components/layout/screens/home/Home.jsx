/*import { useNavigate } from 'react-router-dom'*/
import '../../../../assets/styles/index.scss'
import Layout from '../../Layout'
import {Helmet} from "react-helmet";
import './Home.Module.scss'
import GeneralCarousel from '../../carousel/GeneralCarousel'
import Routers from '../../../../routes/Routes';
import GeneralForm from '../../any_questions/GeneralForm';

function Home() {
	return (
		<Layout>
			<Helmet>
				<meta charset="UTF-8" />
    			<link rel="icon" type="image/svg+xml" href="../../../../../public/images/HD-wallpaper-artistic-house.jpg" />
    			<title>Главная</title>
            </Helmet>
			<div className="carousel">
				<GeneralCarousel/>
			</div>
			<div className="general_form">
				<GeneralForm/>
				<div className='form_image'></div>
			</div>
            
        


		</Layout>
	)
}

export default Home
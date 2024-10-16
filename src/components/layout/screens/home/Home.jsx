/*import { useNavigate } from 'react-router-dom'*/
import '../../../../assets/styles/index.scss'
import Layout from '../../Layout'
import {Helmet} from "react-helmet";
import './Home.Module.scss'
import GeneralCarousel from '../../carousel/GeneralCarousel'
import Routers from '../../../../routes/Routes';

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
            
        


		</Layout>
	)
}

export default Home
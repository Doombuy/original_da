import { useNavigate } from 'react-router-dom'
import '../../../../assets/styles/index.scss'
import Layout from '../../Layout'

import './Home.Module.scss'
import ImgCarousel from '../../carousel/imgCarousel'
import TxtCarousel from '../../carousel/txtCarousel'

function Home() {
	return (
		<Layout>
			<div className="carousel">
				<div className='crlsImg'>
					<ImgCarousel/>
				</div>
				<div className='crlsTxt'>
					<TxtCarousel/> 
				</div>
			</div>
            
        


		</Layout>
	)
}

export default Home
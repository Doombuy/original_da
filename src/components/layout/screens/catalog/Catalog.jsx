import Layout from "../../Layout"
import Routers from "../../../../routes/Routes"
import {Helmet} from "react-helmet";

export const Catalog = () => {
	return (
		<>
			<Layout/>
            <Helmet>
				<meta charset="UTF-8" />
    			
    			<title>Каталог</title>
            </Helmet>
            <div className='wrapper-inner-page'>Catalog</div>
		</>
	)
}

export default Catalog
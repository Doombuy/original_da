
import Layout from "../../Layout";
import { useRouteError } from "react-router-dom";
import './NotFound.scss'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
	<Layout>
		<div id="error-page">
			<h1>Уупс!</h1>
			<p>Извините, такой страницы не существует.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	</Layout>
  );
}
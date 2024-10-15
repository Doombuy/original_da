import Catalog from '../components/screens/catalog/Catalog'
import Home from '../components/screens/home/Home'
import premiumCatalog from '../components/screens/premium-Catalog/premiumCatalog'
/*import Profile from '../components/screens/profile/Profile'*/

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/catalog',
		component: Catalog,
		isAuth: false
	},
	{
		path: '/premium-catalog',
		component: premiumCatalog,
		isAuth: false
	},
    /*
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}  
	{
		path: '/new-exercise',

		component: NewExercise,
		isAuth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		auth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		isAuth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		isAuth: true,
	}, */
]

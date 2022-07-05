import Header from "./Components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import PostView from './pages/PostView/PostView';
import {Switch, Route} from 'react-router-dom'

function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/postView/:id" exact component={PostView} />
			</Switch>
			<Footer/>
		</>
	);
}

export default App;

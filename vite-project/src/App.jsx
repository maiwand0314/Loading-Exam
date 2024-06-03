import './App.css'
import './Loading.css'
import './LoadingTwo.css'
import Loading from './Loading'
import MainPage from './MainPage';
import LoadingTwo from './LoadingTwo';

function App() {

  return(
  <>
   <div className="Appe">
		<LoadingTwo />
    </div>

  <MainPage/>
  <Loading/>
  </>
);
}

export default App

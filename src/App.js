import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
  ) 
}

export default App;

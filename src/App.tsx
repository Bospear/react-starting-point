import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import { Authenticator } from './Helpers/Routes/Authenticator';
import Logout from './Pages/Logout/Logout';
import Home from './Pages/Home/Home';
import PrivateRoute from './Helpers/Routes/PrivateRoute';
import Login from './Pages/Login/Login';


function elementWrapper(element:any)
{
  return (<PageWrapper>{element}</PageWrapper>);
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/login' element={Authenticator.authenticate()?(<Navigate to="/" />):(<Login/>)} />
        <Route path='/logout' element={<Logout/>} />
        <Route element={<PrivateRoute/>}>
        <Route path='/' element={elementWrapper(<Home/>)}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

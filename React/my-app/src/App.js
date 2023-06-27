import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login';
import Register from './Register';
import Nav from './components/navbar/Nav';
import Sidebar from './components/navbar/Sidebar';
import Main from './components/main/Main';
import Log from './components/login/Log';
import Signup from './components/signup/Signup';
import Home from './pages/Home';
import Posts from './components/Posts/Posts';
import Mainhome from './home/Mainhome';
import Content from './components/content/Content';
import Adds from './components/adds/Adds';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/navbar' element={<Nav/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/mainhome' element={<Mainhome/>}/>
      <Route path='/content' element={<Content/>}/>
      <Route path='/adds' element={<Adds/>}/>







    </Routes>
    </BrowserRouter>
  );
}

export default App;

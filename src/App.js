import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Hello from './component/Task one/HelloWorld'
import Card from './component/Task Two/Congrats Card'
import Super from './component/Task Three/OverLeague ';
import Social from './component/Task Four/Social';
import Notification from './component/Task five/Notifications';
import Menu from './component/Menu/Menu';
import Login from './component/Task six/Login';
import Tech from './component/Task seven/Technologies';
import Hooks from './component/Task eight/Hooks Assignment';
import Fruits from './component/Task nine/Fruits Counter';
import Feedback from './component/Task ten/feedback emo';
import Heart from './component/Task ten/feedheart';
// import Portfolio from './component/Portfolio/Module 1/ModuleOne';
import Jsondata from './component/JSON/Json';
import Jsondata2 from './component/JSON/json2';
import Jsondata3 from './component/JSON/json3';
import { UserList } from './component/UserList/userlist';
import { UserInsert } from './component/UserList/userinsert';

function App() {
  return (
    <>
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Menu/>,<Hello/>]}/>
    <Route path='/task2' element={[<Menu/>,<Card/>]}/>
    <Route path='/task3' element={[<Menu/>,<Super/>]}/>
    <Route path='/task4' element={[<Menu/>,<Social/>]}/>
    <Route path='/task5' element={[<Menu/>,<Notification/>]}/>
    <Route path='/task6' element={[<Menu/>,<Login/>]}/>
    <Route path='/task7' element={[<Menu/>,<Tech/>]}/>
    <Route path='/task8' element={[<Menu/>,<Hooks/>]}/>
    <Route path='/task9' element={[<Menu/>,<Fruits/>]}/>
    <Route path='/task10' element={[<Menu/>,<Feedback/>]}/>
    <Route path='/json1' element={[<Menu/>,<Jsondata/>]}/>
    <Route path='/json2' element={[<Menu/>,<Jsondata2/>]}/>
    <Route path='/json3' element={[<Menu/>,<Jsondata3/>]}/>
    <Route path='/user' element={[<Menu/>,<UserList/>]}/>
    <Route path='/userinsert' element={[<Menu/>,<UserInsert/>]}/>
    <Route path='/heart' element={<Heart/>}/>
   </Routes>
   </BrowserRouter>
    
    </>
  );
}
export default App;


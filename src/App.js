import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/add' element={<AddUser/>}/>
            <Route path='/users/update/:id' element={<UpdateUser/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Viewall from './Viewall';
import Viewone from './Viewone';
import Contact from './Contact';
import Changepwd from './Changepwd';
import { useState } from 'react';
import Navadmin from './Navadmin';
import Navemp from './Navemp';
import Logout from './Logout';

function App()
 {
  const [loginStatus, setloginStatus]=useState('gen');
  return (
    <div className="App">
      <h1>this is App Component</h1>
      <BrowserRouter>
      {loginStatus==="gen" ? (<Navbar/>) : loginStatus==="admin" ? (<Navadmin/>) : loginStatus==="emp" ? (<Navemp/>) : "" }
      <Routes>
        <Route path="/login" element={<Login setloginStatus={setloginStatus}></Login>}/>
        <Route path="/register" exact Component={Register}/>
        <Route path="/home" exact Component={Home}/>
        <Route path="/about" exact Component={About}/>
        <Route path="/viewall" exact Component={Viewall}/>
        <Route path="/viewone" exact Component={Viewone}/>
        <Route path="/contact" exact Component={Contact}/>
       <Route path="/changepwd" exact Component={Changepwd}/>
       <Route path="/logout" element={<Logout setloginStatus={setloginStatus}></Logout>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

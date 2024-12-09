
import Landing from './pages/Landing'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";


function App() {

  const [users,setUsers] = useState([{username:"sandy", password:"5245"}])
  return (<>

  <BrowserRouter>
  <Routes>

    <Route path = "/" element = {<Login users = {users} setUsers = {setUsers}/>}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />}></Route>
    <Route path="/landing" element={<Landing />}></Route>


  </Routes>
  
  </BrowserRouter>
  
  </>
    



  );
}

export default App;

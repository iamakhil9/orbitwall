import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Homepage from './Homepage'
function App() {
  const  [user, setUser] = useState([])
  const  [userinfo, setUserInfo] = useState({})
  const usersData =  async() =>{
 try{
   const res=await axios.get('https://panorbit.in/api/users.json');
   setUser(res.data.users);
   console.log(res.data.users)
 }
 catch(error){
   console.log(error);
   }
  }
  useEffect(()=> {usersData();},[])
  // user[0] gives the list of users from API
  
  
  return (
    <div className="App">
      
    
      <Homepage u={user[1]} />
    </div>
  );
}

export default App;

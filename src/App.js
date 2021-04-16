import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Homepage from './Homepage'
function App() {
  const  [user, setUser] = useState([])
  const  [userinfo, setUserInfo] = useState([])
  const usersData =  async() =>{
 try{
   const res=await axios.get('https://panorbit.in/api/users.json');
  //  setUser(arr => [...arr,res.data.users])
  setUser(res.data.users)
  //  console.log(res.data.users)
 }
 catch(error){
   console.log(error);
   }
  }
  useEffect(()=> {usersData();},[])
  // const l = user.map((item)=>{return console.log(item.id)}) 
  // console.log(user)
  return (
    <div className="App">
      
      {/* <div>{u1}</div> */}
      <Homepage myUser={user} />
    </div>
  );
}

export default App;

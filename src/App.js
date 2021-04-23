import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Switch, Route, Link} from 'react-router-dom'
import Homepage from './Homepage';
import Profile from './Profile';
import Profileposts from './Profileposts';
import Profilegallery from './Profilegallery'
import Profiletodo from './Profiletodo'

function App() {
  const  [user, setUser] = useState([])
  const  [userinfo, setUserInfo] = useState([])
 

    const usersData =  async() =>{
 try{
   const res=await axios.get('https://randomuser.me/api/?results=9');
  //  setUser(arr => [...arr,res.data.users])
  const pictures = res.data.results.map((pic) => {
    return (
      <div key = {pic.results}>
        <img src = {pic.picture.thumbnail} />
      </div>
    )
  })
  setUser(res.data.results)
  setUserInfo(pictures)
 }
 catch(error){
   console.log(error);
   }
  }
  useEffect(()=> {usersData();},[])
  // console.log(user)
  return (
    <div className="App">
  
      <Switch>
        <Route exact path="/" >
          <Homepage myUser={user} />
        </Route>
        <Route exact path="/profile/:ids">
          <Profile users1={user} />
         </Route>
         <Route  path={"/profile/:ids"+"/posts"}>
          <Profileposts users1={user} />
         </Route>
         <Route  path={"/profile/:ids"+"/gallery"}>
          <Profilegallery users1={user} />
         </Route>
         <Route  path={"/profile/:ids"+"/todo"}>
          <Profiletodo users1={user} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;

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
   const res=await axios.get('https://randomuser.me/api/?results=5');
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
      {/* {user} */}
      {/* <Homepage myUser={user} /> */}
      {/* <Profile  /> */}
       {/* <button onClick={()=>Funct()}>click</button>  */}
      {/* <ul>
        <li id='12233' onClick={(e)=>funct(e)} >testing</li>
      </ul>
      <div id='testid'> </div>  */}
      {/* <Sample user={user}/> */}
      {/* <ul className='list'>
            {user.map((item)=>{return <li key={item.id}  onClick={()=>Funct({item})} ><div className='flexing'><img className='profilethumbnail' src={item.profilepicture} alt='thumbnail'></img><div className='names'>{item.name}</div></div><hr></hr></li>})}
        </ul> */}
        {/* <div id='userdata'>{userinfo} </div> */}

      {/* {user} */}

{/* <button onClick={()=>Funct()}>click</button> */}
  
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

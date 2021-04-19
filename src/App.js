import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Switch, Route, Link} from 'react-router-dom'
// import Homepage from './Homepage'
// import Profile from './Profile'
import Sample from './Sample';
import Demo from "./Demo";
import Homepage from './Homepage';
import Info from './Info';
import Profile from './Profile';
function App() {
  const  [user, setUser] = useState([])
  const  [userinfo, setUserInfo] = useState([])
  const a="Akhil";
  const u= [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {"id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
      }
  }
]
  const usersData =  async() =>{
 try{
   const res=await axios.get('https://panorbit.in/api/users.json');
  //  setUser(arr => [...arr,res.data.users])
  setUser(res.data.users)
   console.log(res.data.users)
 }
 catch(error){
   console.log(error);
   }
  }
  useEffect(()=> {usersData();},[])
  // const l = user.map((item)=>{return console.log(item.id)}) 
  // console.log(user)
  
  const Funct =(props) =>{
    console.log(userinfo)
  
    // document.getElementById('userdata').innerHTML="<Sample user="{data}+" />"
    

  }
//     const usersData =  async() =>{
//  try{
//    const res=await axios.get('https://randomuser.me/api/?results=5');
//   //  setUser(arr => [...arr,res.data.users])
//   // setUser(res.data.users)
//    console.log(res.data.results)
//   //  console.log(res.data.results[0].id)
//   //  console.log(res.data.results[0].name)
//   //  console.log(res.data.results[0].login)
//   //  console.log(res.data.results[0].name.first)
//   const pictures = res.data.results.map((pic) => {
//     return (
//       <div key = {pic.results}>
//         <img src = {pic.picture.thumbnail} />
//       </div>
//     )
//   })
//   setUser(pictures)
//   setUserInfo(res.data.results)
//  }
//  catch(error){
//    console.log(error);
//    }
//   }
  useEffect(()=> {usersData();},[])
  return (
    <div className="App">
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
      <ul>
      <li><Link to ="/" >Demo Page</Link></li>
       <li> <Link to ="/sample" >Sample </Link></li>
{/* <button onClick={()=>Funct()}>click</button> */}
      </ul>
      <Switch>
        <Route exact path="/" >
          <Homepage myUser={user} />
        </Route>
        {/* <Route  path="/sample">
          <Sample a={a}/>
        </Route> */}
        <Route  path="/profile/:ids">
          <Profile users1={user} />
         </Route>
         
        <Route  path="/info/:email">
          <Info user2={userinfo} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;

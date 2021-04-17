import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
// import Homepage from './Homepage'
// import Profile from './Profile'
import Sample from './Sample';
function App() {
  const  [user, setUser] = useState([])
  const  [userinfo, setUserInfo] = useState([])

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
  // const usersData =  async() =>{
//  try{
//    const res=await axios.get('https://panorbit.in/api/users.json');
//   //  setUser(arr => [...arr,res.data.users])
//   setUser(res.data.users)
  //  console.log(res.data.users)
//  }
//  catch(error){
//    console.log(error);
//    }
//   }
//   useEffect(()=> {usersData();},[])
  // const l = user.map((item)=>{return console.log(item.id)}) 
  // console.log(user)
  
  const funct =(e) =>{
    setUser(u)
    console.log(e.target.id)

  }

  return (
    <div className="App">
      {/* <Homepage myUser={user} /> */}
      {/* <Profile  /> */}
      <button onClick={()=>funct()}>click</button>
      <ul>
        <li id='12233' onClick={(e)=>funct(e)} >testing</li>
      </ul>
      <div id='testid'> </div>
      {/* <Sample user={user}/> */}
    </div>
  );
}

export default App;

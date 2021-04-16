 import './App.css';
import {useState} from 'react'
import {users} from './users'
//  importing array of users from app.js as user
export default function Homepage(props) {
    const [newUser,setNewUser]=useState([])
    const users =props.myUser;
    console.log(users)
    // const displaylist=()=>{ return props.user.map((item)=>{console.log(item.id)})}
    // displaylist();
    // const l = users.map((item)=>{return <li>item.id</li>})
    return (
        <div>
            <div className='container'>
		
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,0L48,48C96,96,192,192,288,240C384,288,480,288,576,250.7C672,213,768,139,864,144C960,149,1056,235,1152,261.3C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <svg className='layersvg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,0L48,48C96,96,192,192,288,240C384,288,480,288,576,250.7C672,213,768,139,864,144C960,149,1056,235,1152,261.3C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="grad">
    </div>
    <div className="userlist">
        <div className="heading">
            Select an account
        </div >
        <ul className='list'>
            {users.map((item)=>{return <li><div className='flexing'><img className='profilethumbnail' src={item.profilepicture} alt='thumbnail'></img><div className='names'>{item.name}</div></div><hr></hr></li>})}
        </ul>
    
    </div>
    </div>
        </div>
    )
}

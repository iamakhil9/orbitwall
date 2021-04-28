import './Profile.css'
import React from 'react'
import {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import GoogleMap from './GoogleMap'
function Profile(props) {
    const {ids}=useParams();
    console.log(ids)
    const items= props.users1;
    console.log(props.users1)
    const exctract = items.map((item)=>{ if (ids===item.login.username){return (<div key ={item.id.value}className="card card-box card-box2">
       
    <div><img src={item.picture.large} alt='pic'></img></div>
    <div className='info'> <span className='content'>{item.name.first} {item.name.last}</span></div>
    <div className='info'>Username : <span className='content'>{item.login.username}</span></div>
    <div className='info'>e-mail : <span className='content'>{item.email}</span></div>
    <div className='info'>Phone : <span className='content'>{item.cell}</span></div>
    <div id='topline'><hr></hr></div>
    

  </div>)} 
  else{return ""}
}

)
const rectractHeader = items.map ((item )=>{
  if (ids===item.login.username){return (
    <div id='profile-flexing' onClick={()=>OpenForm()}>
            <img className='profilethumbnail' src={item.picture.thumbnail} alt='thumbnail'></img>
            <div className='namesprofile'>{item.name.first} {item.name.last}</div>
      </div>
    )} 
else{return ""}
}
)

const exctractAddress = items.map((item)=>{ if (ids===item.login.username){return (
       <div key={item.name} className="card-box2 cardbox3"> 
       <div className='info'> Address :                             <span className='content'></span></div>
        <div className='info'>street : <span className='content'>{item.location.street.name}</span></div>
        <div className='info'>street number : <span className='content'>{item.location.street.number}</span></div>
        <div className='info'>city : <span className='content'>{item.location.city}</span></div>
        <div className='info'>zipcode : <span className='content'>{item.location.postcode}</span></div>

      <div className='info info2'><GoogleMap  lat={item.location.coordinates.latitude} lng={item.location.coordinates.longitude}/></div>
      <div className='info1'>Lat: <span className='content'>{item.location.coordinates.latitude}</span> Lng: <span className='content'>  {item.location.coordinates.longitude}</span></div>


  </div>)} 
  else{return ""}
}

)
const reactHeadercard = items.map ((item )=>{
  if (ids===item.login.username){return (
    <div id='card' >
            <div><img  src={item.picture.medium} style={{borderRadius:"50%"}}alt='thumbnail'height="50px" width="50px"></img></div>
            <div className='pcard'>{item.name.first}{item.name.last}</div>
            <div className='namesprofile' style={{fontSize:"large"}}>{item.email}</div>
            <div onClick={()=>CloseForm()} ><Link to='/'><button className="signout" > Signout</button></Link></div>
      </div>
    )} 
else{return ""}
}
)
const OpenForm=()=> {
    document.getElementById("card").style.display = "block";
  }
  
const CloseForm =()=> {
    document.getElementById("card").style.display = "none";
  }
const [user,setUser] = useState([]);
    return (
    
            <div className='photo-grid'>
              {reactHeadercard}

            <div
        className="card card-tall ">
            <div className='profile-menu'>
            <ul >
                <li class='profile-menu-items' style={{color:"white"}}><Link to={"/profile/"+ids} style={{color:"white"}}> Profile <i id="profile"class="fas fa-angle-right arrt"></i>  </Link></li> 
                    <hr></hr>
                    <li className='profile-menu-items'><Link to={"/profile/"+ids+"/posts"}>Posts  </Link></li>
                    <hr></hr>
                   <li className='profile-menu-items'> <Link to={"/profile/"+ids+"/gallery"}>Gallery</Link>  </li> 
                    <hr></hr>
                    <li className='profile-menu-items'><Link to={"/profile/"+ids+"/todo"}>Todo </Link> </li> 
                </ul>
            </div>
      </div>
      <div className="card card-wide">
        <div className='topheader'>
        <div id='p' >Profile</div>
        {rectractHeader}
        <div id='topline'><hr></hr></div>
      </div>
      </div>
{exctract}
{exctractAddress}
    </div>
    
    )
}

export default Profile ;



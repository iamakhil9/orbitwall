import './Profile.css'
import React from 'react'
import {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
// import GoogleMap from './GoogleMap'
function Profileposts(props) {
  const [modalIsOpen,setModalIsOpen]=useState(false)
    const {ids}=useParams();
    console.log(ids)
    const items= props.users1;
    // console.log(props.users1)
    const exctract = items.map((item)=>{ if (ids==item.id){return (<div key ={item.id}className="card card-box card-box2">
       
    <div><img src={item.profilepicture} alt='pic'></img></div>
    <div className='info'> <span className='content'>{item.name}</span></div>
    <div className='info'>Username : <span className='content'>{item.username}</span></div>
    <div className='info'>e-mail : <span className='content'>{item.email}</span></div>
    <div className='info'>Phone : <span className='content'>{item.phone}</span></div>
    <div className='info'>Website : <span className='content'>{item.website}</span></div>
    <div id='topline'><hr></hr></div>
    <div className='info'> Company <span className='content'></span></div>
    <div className='info'>name : <span className='content'>{item.company.name}</span></div>
    <div className='info'>catchPhrase : <span className='content'>{item.company.catchPhrase}</span></div>
    <div className='info'>bs : <span className='content'>{item.company.bs}</span></div>
    

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

const exctractAddress = items.map((item)=>{ if (ids==item.id){return (
       <div key={item.name} className="card card-box card-box2 cardbox3"> 
       <div className='info'> Address :                             <span className='content'></span></div>
        <div className='info'>street : <span className='content'>{item.address.street}</span></div>
        <div className='info'>suite : <span className='content'>{item.address.suite}</span></div>
        <div className='info'>city : <span className='content'>{item.address.city}</span></div>
        <div className='info'>zipcode : <span className='content'>{item.address.zipcode}</span></div>

      {/* <div className='info'><GoogleMap lat={item.address.geo.lat} lng={item.address.geo.lng}/></div> */}
      <div className='info1'>Lat: <span className='content'>{item.address.geo.lat}</span> Lng: <span className='content'>  {item.address.geo.lng}</span></div>


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
                <li class='profile-menu-items'><Link to={"/profile/"+ids}> Profile   </Link></li> 
                    <hr></hr>
                    <li className='profile-menu-items'><Link to={"/profile/"+ids+"/posts"} style={{color:"white"}}>Posts  <i id="posts" class="fas fa-angle-right arrt"></i></Link></li>
                    <hr></hr>
                   <li className='profile-menu-items'> <Link to={"/profile/"+ids+"/gallery"}>Gallery</Link>  </li> 
                    <hr></hr>
                    <li className='profile-menu-items'><Link to={"/profile/"+ids+"/todo"}>Todo </Link> </li> 
                </ul>
            </div>
        1
      </div>
      <div className="card card-wide">
        <div className='topheader'>
    
        <div id='p' >Profile</div>
        {rectractHeader}
        <div id='topline'><hr></hr></div>
      </div>
      </div>
      <div  className="card card-wide"> <div id='comingsoon'>Coming Soon</div></div>


    </div>
    
    )
}

export default Profileposts ;

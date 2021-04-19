import './Profile.css'
import React from 'react'
import {useState} from 'react'

function Userprofile(props) {
   
    const [user,setUser] = useState([]);
    
    // console.log(user)
    return (
        <div>
            <div className='photo-grid'>
            {/* <div
        className="card card-tall ">
            <div className='profile-menu'>
                <ul >
                    <li className='profile-menu-items'>Profile</li>
                    <hr></hr>
                    <li className='profile-menu-items'>Posts</li>
                    <hr></hr>
                    <li className='profile-menu-items'>Gallery</li>
                    <hr></hr>
                    <li className='profile-menu-items'>Todo</li>
                </ul>
            </div>
        1
      </div> */}
      <div className="card card-wide">
        <div className='topheader'>
        <div id='p' >Profile</div>
        <div id='profile-flexing'>
            <img className='profilethumbnail' src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt='thumbnail'></img>
            <div className='namesprofile'>Leahne Graham</div>
        </div>
        <div id='topline'><hr></hr></div>
      </div>
      </div>
      <div className="card card-box card-box2">
        <div><img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt='picture'></img></div>
        <div className='info'> <span className='content'>Leahne Graham</span></div>
        <div className='info'>Username : <span className='content'>Leahne Graham</span></div>
        <div className='info'>e-mail : <span className='content'>Leahne Graham</span></div>
        <div className='info'>Phone : <span className='content'>Leahne Graham</span></div>
        <div className='info'>Website : <span className='content'>Leahne Graham</span></div>
        <div id='topline'><hr></hr></div>

      </div>
            </div>
            {/* {props.myuser} */}
        </div>
    )
}

export default Userprofile

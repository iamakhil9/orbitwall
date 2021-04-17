import './Profile.css'
import React from 'react'
import {useState} from 'react'

function Profile(props) {
   const users= [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09hotlink-ok5",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-hotlink-ok3-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        }
    ]

    const [user,setUser] = useState([]);
    
    // console.log(user)
    return (
        <div>
            <div className='photo-grid'>
            <div
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
      </div>
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
        <div className='info'> Company <span className='content'></span></div>
        <div className='info'>name : <span className='content'>Leahne Graham</span></div>
        <div className='info'>catchPhrase : <span className='content'>Leahne Graham</span></div>
        <div className='info'>bs : <span className='content'>Leahne Graham</span></div>

      </div>
      <div
        className="card card-box card-box2">
       <div className='info'> Address :                             <span className='content'></span></div>
        <div className='info'>street : <span className='content'>Leahne Graham</span></div>
        <div className='info'>suite : <span className='content'>Leahne Graham</span></div>
        <div className='info'>city : <span className='content'>Leahne Graham</span></div>
        <div className='info'>zipcode : <span className='content'>Leahne Graham</span></div>
        
    
      </div>
            </div>
            {/* {props.myuser} */}
        </div>
    )
}

export default Profile

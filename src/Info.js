import React from 'react'
import { Link } from 'react-router-dom'

function Info(props) {
    console.log(props.user2)
    const user1=props.user2
    // let r= user1.map( (item)=> {return <Link to ="/info"><h2>{item.name.first}</h2></Link>})
        // return <ul><li>item.id</li><li>item.name</li></ul>} )
    // console.log(r)
    return (
        <div>
           <h1>Info </h1> 
           {user1.map( (item)=> {return <Link to ="/info"><h2>{item.name.first}</h2></Link>})}
        </div>
    )
}

export default Info;
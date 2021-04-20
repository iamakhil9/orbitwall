import React from 'react'
import GoogleMap from './GoogleMap'

function Sample(props) {
    // console.log(props.user)
    // const user1=props.user
    // console.log(user1)
    return (
        <div>
           <h1>Sample {props.a}</h1> 
         <div className='gmap' ><GoogleMap lat='14.4644'  lng='75.921' /></div>
        </div>
    )
}

export default Sample;
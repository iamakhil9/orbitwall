import React from 'react'

function Sample(props) {
    console.log(props.user)
    const user1=props.user
    return (
        <div>
            {user1[0].name}
        </div>
    )
}

export default Sample
{}
import React from 'react'
import Follower from './Follower'

const UserCard = props => {
    console.log("UserCard user", props.user)
    return(
        <div className="container">
            <div className='text'>
            <h1>Username: {props.user.login}</h1>
            <Follower followers={props.followers} />
            </div>
        </div>
    )
}

export default UserCard;
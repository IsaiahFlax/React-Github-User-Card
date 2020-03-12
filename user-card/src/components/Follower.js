import React from 'react';

const Follower = props => {
    return (
    <div>
    <h2>Followers: {props.followers.map(x => <li>{x.login}</li>)}</h2>
    {console.log("follower props.followers[0]", props.followers[0])}
    </div>
    )
}


export default Follower;
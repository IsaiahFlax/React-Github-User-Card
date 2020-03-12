import React from 'react'
import Follower from './Follower'
import Card from '@material-ui/core/Card'
import { makeStyles, CardContent } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
    },
})

const UserCard = props => {
    const classes = useStyles();
    console.log("UserCard user", props.user)
    return(
        <Card className={classes.root}>
            <CardContent>
            <div className='text'>
            <h1>Username: {props.user.login}</h1>
            <Follower followers={props.followers} />
            </div>
            </CardContent>
            
        </Card>
    )
}

export default UserCard;
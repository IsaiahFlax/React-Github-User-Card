import React from 'react'
import Follower from './Follower'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        width: '100%'
    },
    media: {
        height: 10,
        width: '100%',
        paddingTop: '56.25%', // 16:9
      },
    img: {
        objectFit: 'fill'
    }
})

const UserCard = props => {
    const classes = useStyles();
    console.log("UserCard user", props.user)
    return(
        <Card className={classes.root}>

            <CardContent>
            <div className='text'>
            <h1>Username: {props.user.login}</h1>
            </div>
            </CardContent>

                <CardContent>
                <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="auto"
          width='100%'
          image="http://ghchart.rshah.org/IsaiahFlax"
          title="github Calendar"
          overflow='visable'
        />
                </CardContent>


            <CardContent>
            <Follower followers={props.followers} /> 
            </CardContent>
            </Card>
                       
        
    )
}

export default UserCard;
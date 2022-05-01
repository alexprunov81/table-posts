import React from 'react'
import classes from './Body.module.css'

const Body = props => {
    return (
        <div className={classes.Body}>
            <div className={classes.idColumn}>1</div>
            <div className={classes.headerColumn}>Lorem ipsum dolor sit amet.</div>
            <div className={classes.descriptionColumn}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, voluptatibus.</div>
        </div>
    )
}

export default Body
import React from 'react'
import classes from './Icon.module.css'

const Icon = props => {

    const cls = [classes.Icon, 'fa']
    cls.push(props.iconClass)


    return (
        <span  style={props.iconStyles}>
            <i onClick={props.onClick} className={cls.join(' ')} />
        </span>
    )
}

export default Icon
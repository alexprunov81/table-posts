import React, {useRef, useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Pages.module.css'

const Pages = props => {

    const getList = () => {
        return props.pageList.map((pageNumber, index) => {
            return (
                <li
                    className={classes.Li}
                    key={index}
                    onClick={props.onClick}>
                    <NavLink
                        to={`/page_${pageNumber}`}
                        style={({isActive}) => {
                           return {color: isActive
                                   ? '#7EBC3C'
                                   : '#474955'}
                        }}
                    >
                        {pageNumber}
                    </NavLink>
                </li>

            )
        })
    }

    return (
        <ul>
            {getList()}
        </ul>
    )
}

export default Pages
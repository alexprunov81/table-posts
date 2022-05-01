import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './NavPages.module.css'
import axios from "axios";

const NavPages = props => {


    const getList = () => {


        const totalPage = []
        for (let i = props.startPageCount; i <= Math.ceil(props.totalPosts.length / 10); i++) {
                totalPage.push(i)
        }

        return totalPage.map((pageNumber, index) => {
            return (
                <li
                    className={classes.Li}
                    key={index}
                    onClick={props.onClick}>
                    <NavLink
                        to={`/page_${pageNumber}`}
                        style={({isActive}) => {
                            return {
                                color: isActive
                                    ? '#7EBC3C'
                                    : '#474955'
                            }
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

export default NavPages
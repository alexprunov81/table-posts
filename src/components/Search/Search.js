import React from 'react'
import classes from './Search.module.css'
import Input from '../../UI/Input/Input'

const Search = props => {

    const iconClass = 'fa-search'
    const iconStyles = {
        color: '#ffffff',
        position: 'absolute',
        top: '15px',
        right: '16px',
        width: '21px',
        height: '21px'
    }


    const searchOnClickHandler = () => {
        props.setSearch(`&q=${props.searchInput.current.value}`)
    }

    return (

        <div className={classes.Search}>
            <Input
                searchInput={props.searchInput}
                searchOnClickHandler={searchOnClickHandler}
                iconStyles={iconStyles}
                iconClass={iconClass}
            />
        </div>
    )
}

export default Search
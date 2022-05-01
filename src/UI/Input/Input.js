import React, {useRef} from 'react'
import classes from './Input.module.css'
import Icon from "../Icon/Icon";

const Input = props => {
    const styles = {
        width: '100%',
        height: '100%',
        background: 'transparent',
        outline: 'none'
    }
    return (
        <label style={styles} htmlFor="">
            <input
                ref={props.searchInput}
                onInput={props.onInputHandler}
                style={styles}
                className={classes.Input}
                placeholder='поиск'
            />
            <Icon
                onClick={props.searchOnClickHandler}
                iconStyles={props.iconStyles}
                iconClass={props.iconClass}
            />
        </label>
    )
}

export default Input
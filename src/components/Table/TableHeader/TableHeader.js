import React from 'react'
import classes from './TableHeader.module.css'
import Icon from "../../../UI/Icon/Icon";

const TableHeader = props => {
    return (
        <div className={classes.TableHeader}>
            <div className={classes.cellId}>
                <span>ID</span>
                <Icon
                    onClick={props.sortId}
                    iconClass={props.idIconClass}/>
            </div>
            <div className={classes.cellHeader}>
                <span>Заголовок</span>
                <Icon
                    onClick={props.sortHeader}
                    iconClass={props.headerIconClass}/>
            </div>
            <div className={classes.cellDescription}>
                <span>Описание</span>
                <Icon
                    onClick={props.sortBody}
                    iconClass={props.bodyIconClass}/>
            </div>
        </div>
    )
}

export default TableHeader
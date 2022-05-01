import React from 'react'
import classes from './TableFooter.module.css'
import Button from '../../../UI/Button/Button'
import NavPages from '../../Pages/NavPages'
import {NavLink} from "react-router-dom";

const TableFooter = props => {
    const pageNumber = Number(props.pageNumberFromURL)

    const pageCounter = () => {
        if(pageNumber !== Math.ceil(props.totalPosts.length / 10)) {
            return pageNumber + 1
        } else {
            return Math.ceil(props.totalPosts.length / 10)
        }
    }



    return (
        <div className={classes.TableFooter}>
            <div>
                <NavLink to={`/page_${pageNumber !== 1 ? pageNumber - 1 : 1}`}>
                    <Button
                        onClick={props.onClickPreviousPage}
                    >Назад</Button>
                </NavLink>
            </div>
            <div className={classes.ListItems}>
                <NavPages
                    totalPosts={props.totalPosts}
                    setTotalPosts={props.setTotalPosts}
                    search={props.search}
                    onClick={props.onClick}
                    pageList={props.pageList}
                    setPageList={props.setPageList}
                    startPageCount={props.startPageCount}
                    setStartPageCount={props.setStartPageCount}
                />
            </div>
            <div>
                <NavLink
                    to={`/page_${pageCounter()}`}
                >
                    <Button
                        onClick={props.onClickNextPage}
                    >Далее</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default TableFooter
import React from 'react'
import classes from './TableBody.module.css'

const TablePage = props => {
    const getTemplate = () => {
        return props.posts.map(post => {
            return (
                <div key={post.id}>
                    <div className={classes.idColumn}><span>{post.id}</span></div>
                    <div className={classes.headerColumn}><span>{post.title}</span></div>
                    <div className={classes.descriptionColumn}><span>{post.body}</span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={classes.TableBody}>
            {getTemplate()}
        </div>
    )
}

export default TablePage
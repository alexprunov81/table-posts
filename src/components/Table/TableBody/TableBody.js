import React, {useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Navigate} from 'react-router-dom'
import TablePage from './TablePage'

const TableBody = props => {

    useEffect(() => {

        props.setPageNumberFromURL(window.location.href.split('_')[1])
        async function getData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${props.pageNumberFromURL}${props.search}`)
            const data = await response.data

            const posts = []
            data.forEach(obj => {
                posts.push({
                    id: obj.id,
                    title: obj.title,
                    body: obj.body
                })
            })
            props.setPosts(posts)
        }

        getData()
    }, [props.pageNumberFromURL, props.search])


    return (
        <Routes>
            <Route
                exact={true}
                path={`/page_${props.pageNumberFromURL}`}
                element={<TablePage posts={props.posts}/>}
            />
            <Route
                path={`/`}
                element={<Navigate to={'/page_1'} posts={props.posts}/>}
            />
        </Routes>

    )
}

export default TableBody
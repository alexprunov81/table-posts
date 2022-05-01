import React, {useEffect, useRef, useState} from 'react'
import classes from './Container.module.css'
import Search from '../../components/Search/Search'
import TableHeader from "../../components/Table/TableHeader/TableHeader";
import TableBody from "../../components/Table/TableBody/TableBody";
import TableFooter from "../../components/Table/TableFooter/TableFooter";
import axios from "axios";

const Container = () => {

    const [pageNumberFromURL, setPageNumberFromURL] = useState(1)
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])
    const [headerIconClass, setHeaderIconClass] = useState('fa-angle-down')
    const [idIconClass, setIdIconClass] = useState('fa-angle-down')
    const [bodyIconClass, setBodyIconClass] = useState('fa-angle-down')
    const [totalPosts, setTotalPosts] = useState([])
    const [startPageCount, setStartPageCount] = useState(1)


    const searchInput = useRef(null)

    useEffect(() => {

        async function getAllData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?${search}`)
            const data = await response.data

            const posts = []
            data.forEach(obj => {
                posts.push({
                    id: obj.id,
                    title: obj.title,
                    body: obj.body
                })
            })
            setTotalPosts(posts)
        }

        getAllData()
    }, [search])

    const onActivePageHandler = e => {
        const pageNumber = e.target.innerHTML
        setPageNumberFromURL(pageNumber)
    }

    const nextPage = () => {
        if (posts.length) {
            const pageNumber = Number(window.location.href[window.location.href.length - 1]) + 1
            setPageNumberFromURL(pageNumber)
        }
    }

    const previousPage = () => {
        if (Number(pageNumberFromURL) !== 1) {
            const pageNumber = Number(window.location.href[window.location.href.length - 1]) - 1
            setPageNumberFromURL(pageNumber)
        }
    }


    const sortIdHandler = e => {

        const sortPosts = (arg1, arg2, iconClass) => {
            const sort = posts.sort((a, b) => {
                const a1 = a.id
                const b1 = b.id
                return a1 < b1 ? arg1 :  arg2
            })
            setIdIconClass(iconClass)
            setPosts(sort)
        }

        e.target.classList.contains('fa-angle-down')
            ? sortPosts(1, -1, 'fa-angle-up')
            : sortPosts(-1, 1, 'fa-angle-down')
    }

    const sortHeaderHandler = e => {

        const sortPosts = (arg1, arg2, iconClass) => {
            const sort = posts.sort((a, b) => {
                const a1 = a.title.toLowerCase()
                const b1 = b.title.toLowerCase()
                return a1 < b1 ? arg1 : a1 > b1 ? arg2 : 0
            })
            setHeaderIconClass(iconClass)
            setPosts(sort)
        }

        e.target.classList.contains('fa-angle-down')
            ? sortPosts(-1, 1, 'fa-angle-up')
            : sortPosts(1, -1, 'fa-angle-down')
    }
    const sortBodyHandler = e => {

        const sortPosts = (arg1, arg2, iconClass) => {
            const sort = posts.sort((a, b) => {
                const a1 = a.body.toLowerCase()
                const b1 = b.body.toLowerCase()
                return a1 < b1 ? arg1 : a1 > b1 ? arg2 : 0
            })
            setBodyIconClass(iconClass)
            setPosts(sort)
        }

        e.target.classList.contains('fa-angle-down')
            ? sortPosts(-1, 1, 'fa-angle-up')
            : sortPosts(1, -1, 'fa-angle-down')
    }

    return (
        <div className={classes.Container}>
            <Search
                setSearch={setSearch}
                searchInput={searchInput}
            />
            <TableHeader
                idIconClass={idIconClass}
                headerIconClass={headerIconClass}
                bodyIconClass={bodyIconClass}
                sortId={sortIdHandler}
                sortHeader={sortHeaderHandler}
                sortBody={sortBodyHandler}
            />
            <TableBody
                posts={posts}
                setPosts={setPosts}
                search={search}
                pageNumberFromURL={pageNumberFromURL}
                setPageNumberFromURL={setPageNumberFromURL}
            />
            <TableFooter
                pageNumberFromURL={pageNumberFromURL}
                setPageNumberFromURL={setPageNumberFromURL}
                search={search}
                totalPosts={totalPosts}
                setTotalPosts={setTotalPosts}
                startPageCount={startPageCount}
                setStartPageCount={setStartPageCount}
                onClickPreviousPage={previousPage}
                onClickNextPage={nextPage}
                onClick={onActivePageHandler}
            />
        </div>
    )
}

export default Container
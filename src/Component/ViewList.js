import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import styled from 'styled-components'
import PostList from './PostList'
import fetching from '../Functions/fetching'
import LazyLoad from 'react-lazyload'

const targetList = ['/notice', '/board']

const ViewList = ({ position }) => {
    const [fetchedData, setFetch] = useState([])
    const [loading, setLoading] = useState(false)

    let location = useLocation()
    let pathname = location.pathname

    const apiURL = `./dummy/${pathname}.json`
    useEffect(() => {
        fetchData(apiURL)
    }, [])

    const fetchData = async () => {
        if (!targetList.includes(pathname)) {
            throw new Error()
        }

        const fetched = await fetching(apiURL)
        setFetch(fetched.boardList)
        setLoading(true)
    }

    return (
        <>
            <ScrollList className="noScroll">
                {loading
                    ? fetchedData.map((posts, id) => {
                          return <LazyLoad key={id}>{PostList(posts, id)}</LazyLoad>
                      })
                    : ''}
            </ScrollList>
            <Footer />
        </>
    )
}

const ScrollList = styled.div`
    position: relative;
    flex: 1;
    overflow-y: scroll;
    padding: 30px;
    border-radius: 15px 15px 0 0px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.7);
    margin-bottom: 50px;
`

export default ViewList

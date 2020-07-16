import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import PostList from './PostList'
import fetching from '../Functions/fetching'

const Notice = () => {
    const [fetchedData, setFetch] = useState([])
    const [loading, setLoading] = useState(false)

    const apiURL = './dummy/notice.json'
    const fetchData = async () => {
        const fetched = await fetching(apiURL)
        setFetch(fetched.boardList)
        setLoading(true)
    }

    useEffect(() => {
        fetchData(apiURL)
    }, [])

    return (
        <>
            <ScrollList className="noScroll">
                {loading
                    ? fetchedData.map((posts, id) => {
                          return PostList(posts, id)
                      })
                    : 'Loading'}
            </ScrollList>
            <Footer />
        </>
    )
}

const ScrollList = styled.div`
    position: relative;
    flex: 1;
    overflow-y: scroll;
    margin: 30px;
    margin-bottom: 50px;
`

const Layout = styled.div`
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 800px;
`

export default Notice

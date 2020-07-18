import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import PostList from './PostList'
import fetching from '../Functions/fetching'
import LazyLoad from 'react-lazyload'
import Search from './Search'

const targetList = ['/notice', '/board']

const ViewList = () => {
    const [fetchedData, setFetch] = useState(null)

    let location = useLocation()
    let pathname = location.pathname
    const apiURL = `./dummy/${pathname}.json`

    useEffect(() => {
        const fetchFunction = async () => {
            if (!targetList.includes(pathname)) {
                throw new Error()
            }

            const fetched = await fetching(apiURL)
            setFetch(fetched.boardList)
        }

        fetchFunction(apiURL)
    }, [apiURL])

    return (
        <>
            <Search />
            {console.log('hi')}
            <ScrollList className="noScroll ViewList">
                {fetchedData
                    ? fetchedData.map((posts, id) => (
                          <LazyLoad key={id} overflow={true} throttle={100} height={100}>
                              {PostList(posts, id)}
                          </LazyLoad>
                      ))
                    : ''}
            </ScrollList>
            <Footer />
        </>
    )
}

//     background-color: #262c34;

const ComSearch = styled.span`
    display: inline-block;

    padding: 1rem 0 1rem 1rem;
`

const ScrollList = styled.div`
    background-color: #262c34;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    overflow-y: scroll;
    border-radius: 15px 15px 0 0px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.7);
    margin-bottom: 50px;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export default ViewList

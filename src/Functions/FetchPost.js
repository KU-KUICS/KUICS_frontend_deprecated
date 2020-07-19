import LazyLoad from 'react-lazyload'
import React, { useState, useEffect } from 'react'
import fetching from './fetching'
import PostList from '../Component/PostList'
import { useLocation } from 'react-router-dom'

const FetchPost = () => {
    let location = useLocation()
    let pathname = location.pathname
    const apiURL = `./dummy/${pathname}.json`

    const [fetchedData, setFetch] = useState(null)

    useEffect(() => {
        const fetchFunction = async () => {
            const fetched = await fetching(apiURL)
            setFetch(fetched.boardList)
        }

        fetchFunction(apiURL)
    }, [apiURL])

    return (
        <>
            {fetchedData
                ? fetchedData.map((posts, id) => (
                      <LazyLoad key={id} overflow={true} throttle={100} height={100}>
                          {PostList(posts, id)}
                      </LazyLoad>
                  ))
                : ''}
        </>
    )
}

export default FetchPost

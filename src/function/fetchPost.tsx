import LazyLoad from 'react-lazyload'
import React, { useState, useEffect } from 'react'
import fetching from './fetching'
import PostList from '../component2/post/PostList'
import { useLocation } from 'react-router-dom'

const FetchPost = () => {
    let location = useLocation()
    let pathname = location.pathname
    const apiURL: string = `./dummy${pathname}.json`

    console.log(apiURL)

    const [fetchedData, setFetch] = useState<Array<object>>([])

    useEffect(() => {
        const fetchFunction = async (apiURL: string): Promise<void> => {
            const fetched = await fetching(apiURL)
            setFetch(fetched.boardList)
        }

        fetchFunction(apiURL).catch(error => console.log(error))
    }, [apiURL])

    return (
        <>
            {fetchedData
                ? fetchedData.map((posts: any, id) => (
                      <LazyLoad key={id} overflow={true} throttle={100} height={100}>
                          {PostList(posts, id)}
                      </LazyLoad>
                  ))
                : ''}
        </>
    )
}

export default FetchPost

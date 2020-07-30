import LazyLoad from 'react-lazyload'
import React, { useState, useEffect } from 'react'
import fetching from './fetching'
import PostList from '../component/page/postPage/PostList'

const FetchPostList = ({ pathname, category }) => {
    const apiURL: string = `${pathname}`

    console.log(pathname)

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
                      <LazyLoad key={id} offset={100} height={100}>
                          {PostList({ ...posts, pathname, category }, id)}
                      </LazyLoad>
                  ))
                : ''}
        </>
    )
}

export default FetchPostList

import React from 'react'
import LazyLoad from 'react-lazyload'

const LazyPost = ({ fetchedData }) => {
    if (fetchedData) {
        fetchedData.map((posts.id) => (
            <LazyLoad key={id} overflow={true} throttle={100} height={100}>
                {PostList(posts, id)}
            </LazyLoad>
        ))
    } else {
        return ''
    }
}

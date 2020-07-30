import React, { useEffect, useState } from 'react'
import FetchPost from '../../function/fetchPost'
import { ScrollList } from './ContextListView'
import PostComment from '../page/postPage/PostComment'

const ContextView = ({ category, id }) => {
    useEffect(() => {
        console.log('tmpPage loaded!')
    }, [])

    return (
        <ScrollList>
            <FetchPost pathname={`/${category}/${id}`} />
            <PostComment />
        </ScrollList>
    )
}

export default ContextView

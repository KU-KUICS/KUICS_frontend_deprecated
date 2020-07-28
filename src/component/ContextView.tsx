import React, { useEffect, useState } from 'react'
import FetchPost from '../function/fetchPost'
import { ScrollList } from './ViewList'

const ContextView = ({ category, id }) => {
    useEffect(() => {
        console.log('tmpPage loaded!')
    }, [])

    return (
        <ScrollList state={false}>
            <FetchPost pathname={`/${category}/${id}`} />
        </ScrollList>
    )
}

export default ContextView

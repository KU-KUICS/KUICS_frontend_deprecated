import React, { useRef, useState, useEffect } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Search from './search/Search'
import FetchPost from '../function/fetchPost'
import Post from './post/Post'

const ViewList = () => {
    const [search, setSearch] = useState<boolean>(false)

    const onScroll = () => {
        console.log(targetRef?.current?.scrollTop)
    }

    const searchRef = useRef<HTMLDivElement>()
    const targetRef = useRef<HTMLDivElement>()
    useEffect(() => {
        targetRef?.current?.addEventListener('scroll', onScroll as any)
    }, [])

    return (
        <>
            <Search state={search} setState={setSearch} />
            <ScrollList state={search} className="noScroll ViewList" ref={targetRef as any}>
                <FetchPost />
            </ScrollList>
        </>
    )
}

interface ScrollState {
    state: boolean
}

//background-color: #262c34;
export const ScrollList = styled.div<ScrollState>`
    top: ${props => (props.state ? '200px' : '0px')};
    transition: position 0.4s ease;

    z-index: 0;

    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    overflow-y: scroll;
    height: 10px;

    border-radius: 50px 50px 0 0;

    opacity: 0;

    @keyframes fadeOut {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    animation-fill-mode: forwards;
    animation: fadeOut 0.5s ease 0.5s forwards;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export default ViewList

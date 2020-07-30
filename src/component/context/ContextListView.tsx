import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Search from '../page/searchPage/Search'
import FetchPostList from '../../function/fetchPostList'
import { useLocation } from 'react-router-dom'

const { REACT_APP_API_HOST } = process.env
const apiURL = `http://${REACT_APP_API_HOST}/api`

const ContextListView = () => {
    let location = useLocation()
    let pathname = location.pathname

    const [search, setSearch] = useState<boolean>(false)
    const onScroll = () => {
        console.log(targetRef?.current?.scrollTop)
    }

    // const searchRef = useRef<HTMLDivElement>()
    const targetRef = useRef<HTMLDivElement>()
    useEffect(() => {
        targetRef?.current?.addEventListener('scroll', onScroll as any)
    }, [])

    return (
        <>
            <Search state={search} setState={setSearch} />
            <ScrollListBoolean state={search} className="noScroll ViewList" ref={targetRef as any}>
                <FetchPostList pathname={apiURL + pathname} category={pathname} />
            </ScrollListBoolean>
        </>
    )
}

interface ScrollState {
    state: boolean
}

//background-color: #262c34;
export const ScrollList = styled.div`
    transition: position 0.4s ease;

    z-index: 0;

    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 90%;


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
export const ScrollListBoolean = styled(ScrollList)<ScrollState>`
    top: ${props => (props.state ? '200px' : '0px')};
`
const RowBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export default ContextListView

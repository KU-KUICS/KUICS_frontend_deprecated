import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Search from './search/Search'
import FetchPost from '../function/fetchPost'

const ViewList = () => {
    return (
        <>
            <Search />
            <ScrollList className="noScroll ViewList">
                <FetchPost />
            </ScrollList>
        </>
    )
}

//background-color: #262c34;
const ScrollList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    overflow-y: scroll;
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

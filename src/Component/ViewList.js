import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Search from './Search'
import FetchPost from '../Functions/FetchPost'

const ViewList = () => {
    return (
        <>
            <Search />
            {console.log('search')}
            <ScrollList className="noScroll ViewList">
                {console.log('scrolllist')}
                <FetchPost />
            </ScrollList>
            <Footer />
        </>
    )
}

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

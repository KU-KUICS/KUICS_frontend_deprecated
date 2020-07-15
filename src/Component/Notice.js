import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import PostList from './PostList'

const Notice = () => {
    const [text, setText] = useState([])
    const [loading, setLoading] = useState(false)

    const apiURL = './dummy/notice.json'
    const fetchData = URL => {
        Axios.get(URL)
            .then((data, err) => {
                if (err) throw err
                const fetched = data.data.boardList
                setText(fetched)
            })
            .then(() => {
                setLoading(true)
            })
    }

    useEffect(() => {
        fetchData(apiURL)
    }, [])

    return (
        <>
            <ScrollList className="noScroll">
                {loading
                    ? text.map((data, id) => {
                          return PostList(data, id)
                      })
                    : 'Loading'}
            </ScrollList>
            <Footer />
        </>
    )
}

const ScrollList = styled.div`
    position: relative;
    flex: 1;
    overflow-y: scroll;
    margin: 30px;
    margin-bottom: 50px;
`

const Layout = styled.div`
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 800px;
`

export default Notice

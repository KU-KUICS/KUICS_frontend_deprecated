import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const About = () => {
    const [text, setText] = useState([])
    const [loading, setLoading] = useState(false)

    const apiURL = './dummy/about.json'
    const fetchData = URL => {
        Axios.get(URL)
            .then((data, err) => {
                if (err) throw err
                const fetched = data.data.about
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
        <StyledWidth>
            <h3>{loading ? text[0].title : 'Loading'}</h3>
            {loading
                ? text[0].content.map((data, id) => {
                      return <p key={id}>{data}</p>
                  })
                : 'Loading'}
        </StyledWidth>
    )
}

const StyledWidth = styled.div`
    max-width: 760px;
`

export default About

import React, { useState, useEffect } from 'react'
import fetching from '../Functions/fetching'

import styled from 'styled-components'

const { REACT_APP_API_HOST } = process.env

const About = () => {
    const [fetchedData, setFetch] = useState([])
    const [loading, setLoading] = useState(false)

    const apiURL = `http://${REACT_APP_API_HOST}/api/intro`

    const fetchData = async () => {
        const fetched = await fetching(apiURL)
        setFetch(fetched.introList)
        setLoading(true)
    }

    useEffect((fetchData, apiURL) => {
        fetchData(apiURL)
    }, [])

    return (
        <StyledWidth>
            {loading
                ? fetchedData.map((contents, idx) => {
                      return (
                          <>
                              <h3 key={idx}>{contents.title}</h3>
                              {contents.content.map((paragraph, id) => {
                                  return <p key={idx}>{paragraph}</p>
                              })}
                          </>
                      )
                  })
                : 'Loading'}
        </StyledWidth>
    )
}

const StyledWidth = styled.div`
    max-width: 760px;

    h3:nth-of-type(n + 2) {
        padding-top: 2rem;
    }
`

export default About

import React, { useState, useEffect, Fragment } from 'react'
import fetching from '../Functions/fetching'
import styled from 'styled-components'

const { REACT_APP_API_HOST } = process.env

const About = props => {
    const [fetchedData, setFetch] = useState([])
    const [loading, setLoading] = useState(false)

    const apiURL = `http://${REACT_APP_API_HOST}/api/intro`

    useEffect(() => {
        const fetchData = async () => {
            const fetched = await fetching(apiURL)
            setFetch(fetched.introList)
            setLoading(true)
            props.changeFunction(true)
        }

        fetchData(apiURL)
    }, [])

    return (
        <StyledWidth state>
            {loading
                ? fetchedData.map((contents, idx) => {
                      return (
                          <Fragment key={idx}>
                              <h3 key={50 + idx}>{contents.title}</h3>
                              {contents.content.map((paragraph, id) => {
                                  return <p key={100 * (idx + 1) + id}>{paragraph}</p>
                              })}
                          </Fragment>
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

import React, { useState, useEffect, Fragment } from 'react'
import fetching from '../../../function/fetching'
import styled from 'styled-components'

const { REACT_APP_API_HOST } = process.env

type AboutProps = {
    changeFunction: (arg0: boolean) => void
}

const About: React.FC<AboutProps> = props => {
    const [fetchedData, setFetch] = useState([])
    const [loading, setLoading] = useState<boolean>(false)

    // const apiURL = `./dummy/about.json`
    const apiURL = `http://${REACT_APP_API_HOST}/api/intro`

    useEffect(() => {
        const fetchData = async (apiURL: string) => {
            try {
                const fetched = await fetching(apiURL)
                await setLoading(true)
                setFetch(fetched.introList)
                props.changeFunction(true)
            } catch {
                setLoading(false)
                setTimeout(() => fetchData(apiURL), 3000)
            }
        }

        fetchData(apiURL)
    }, [])

    type contentType = {
        title?: string
        content?: any
    }

    return (
        <StyledWidth>
            {loading === true
                ? fetchedData.map((contents: contentType, idx: number) => {
                      return (
                          <Fragment key={idx}>
                              <h1 key={50 + idx}>{contents.title}</h1>
                              {contents.content.map((paragraph: string, id: number) => {
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
    padding: 2rem;
    h1,
    p {
        color: white;
    }

    h1:nth-of-type(n + 2) {
        padding-top: 2rem;
    }

    text-align: center;
`

export default About

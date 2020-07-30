import React, { useState, useEffect } from 'react'
import fetching from './fetching'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { MdArrowBack } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

interface PostTypes {
    postNo: number
    title: string
    hit: number
    commentCount: number
    context: string
}

const FetchPost = ({ pathname }) => {
    const [fetchedData, setFetch] = useState<PostTypes>(null)
    const { REACT_APP_API_HOST } = process.env
    const apiURL = `http://${REACT_APP_API_HOST}/api` + pathname

    const pageTrans = 'trans'
    const history = useHistory()

    const classNames = {
        appear: `${pageTrans} appear`,
        appearDone: `${pageTrans} appear done`,
    }

    let postNo, title, hit, commentCount, context
    console.log(apiURL)
    useEffect(() => {
        const fetchFunction = async (apiURL: string): Promise<void> => {
            const fetched = await fetching(apiURL)
            setFetch(fetched.post)
        }
        fetchFunction(apiURL).catch(error => console.log(error))
    }, [apiURL])

    if (fetchedData) {
        postNo = fetchedData.postNo
        title = fetchedData.title
        hit = fetchedData.hit
        commentCount = fetchedData.commentCount
        context = fetchedData.context
    }

    return (
        <TransitionGroup className="transitionGroup card">
            <CSSTransition classNames={classNames} timeout={300} appear>
                <Layout>
                    <MdArrowBack style={{ fontSize: '2.5rem', paddingBottom: '0.5rem' }} onClick={history.goBack} />
                    {fetchedData ? (
                        <>
                            <RowBox>
                                <Title>{title}</Title>
                                <ColBox>
                                    <Author>작성자 | hyp3rflow</Author>
                                    <Hit>{hit} hits</Hit>
                                </ColBox>
                            </RowBox>
                            <p>{context}</p>
                        </>
                    ) : (
                        '잘못된 접근입니다.'
                    )}
                </Layout>
            </CSSTransition>
        </TransitionGroup>
    )
}

const RowBox = styled.div`
    display: flex;
    padding-bottom: 1rem;
`

const ColBox = styled.div`
    display: flex;
    bottom: 2rem;
    position: relative;
    flex-direction: column;
`

const Title = styled.h1`
    padding-bottom: 1rem;
    margin-right: auto;
`

const Author = styled.h3`
    font-weight: 400;
    text-align: right;
`
const Hit = styled(Author)`
    font-weight: 300;
`

const Layout = styled.div`
    padding: 3rem;
`

export default FetchPost

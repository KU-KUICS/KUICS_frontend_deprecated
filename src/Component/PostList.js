import { TransitionGroup, CSSTransition } from 'react-transition-group'
import React from 'react'
import styled from 'styled-components'
import Emoji from 'a11y-react-emoji'

import './PostList.scss'

const PostList = (props, key) => {
    const ID = props.boardNo
    const title = props.title
    const Excerpt = props.excerpt

    const pageTrans = 'trans'
    const classNames = {
        appear: `${pageTrans} appear`,
        appearDone: `${pageTrans} appear done`,
    }

    return (
        <TransitionGroup className="transitionGroup card">
            <CSSTransition key={key} classNames={classNames} timeout={300} appear>
                <ColumnBox key={key}>
                    <RowBox>
                        <PostNumber>{ID}</PostNumber>
                        <Title>{title}</Title>
                        <TagList>
                            <Tag color="green" textColor="white">
                                <span className="tagText">Active&nbsp;</span>
                                <Emoji symbol="✅" label="checked" />
                            </Tag>
                            <Tag color="purple" textColor="white">
                                <span className="tagText">Improvement needed&nbsp;</span>
                                <Emoji symbol="👷🏼‍♂️" label="constructing" />
                            </Tag>
                        </TagList>
                    </RowBox>
                    <ContentRowBox>
                        <TagExcerpt>{Excerpt ? Excerpt : 'none.'}</TagExcerpt>
                        <CommentColumnBox>
                            <div>3900 comments</div>
                            <div>3000 views</div>
                            <div>2020-02-22</div>
                        </CommentColumnBox>
                    </ContentRowBox>
                    <hr className="separator" />
                </ColumnBox>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default PostList

const TagList = styled.div`
    align-self: flex-start;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
`

const Tag = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${props => props.color};
    span {
        color: ${props => props.textColor};
    }
    padding: 0px 5px 0px 5px;
    font-size: 1rem;
    margin: 0px 0px 0px 5px;
    border-radius: 5px;
    height: 2rem;
    flex-shrink: 0;
    vertical-align: top;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`

//color: #f8f9fa;
const Title = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
`

//color: #dee2e6;
const TagExcerpt = styled.div`
    font-weight: 400;
    font-size: 1.2rem;
`

const ColumnBox = styled.div`
    flex-shrink: 0;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    min-height: 4rem;

    padding: 2.25rem;
    padding-bottom: 0;
`

const CommentColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    text-align: right;
    flex-grow: 1;
    flex-shrink: 0;
    padding-left: 0.5rem;
    font-size: 1.125rem;
    div {
    }
`
//color: #ced4da;

// color: #ced4da;
const PostNumber = styled.div`
    min-width: 1.8rem;
    font-size: 1.1rem;
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;
`

const ContentRowBox = styled(RowBox)`
    justify-content: space-between;
`

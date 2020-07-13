import React from 'react'
import styled from 'styled-components'

const PostList = props => {
    const ID = props.boardNo
    const title = props.title
    const Excerpt = props.excerpt

    return (
        <ColumnBox>
            <RowBox>
                <PostNumber>{ID}</PostNumber>
                <Title>{title}</Title>
                <Tag>Active ✅</Tag>
            </RowBox>
            <TagExcerpt>{Excerpt ? Excerpt : 'none.'}</TagExcerpt>
        </ColumnBox>
    )
}

export default PostList

const Tag = styled.div`
    display: inline-box;
    background-color: green;
    padding: 0px 0px 0px 5px;
    font-size: 1rem;
    margin: 2px 0px 0px 10px;
    border-radius: 5px;
`

const Title = styled.div`
    color: #f8f9fa;
    font-weight: 600;
`

const TagExcerpt = styled.div`
    color: #dee2e6;
    font-weight: 500;
    font-size: 1.2rem;
`

const ColumnBox = styled.div`
    flex-shrink: 0;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    min-height: 4rem;
`

const PostNumber = styled.div`
    color: #ced4da;
    min-width: 1.8rem;
    font-size: 1.1rem;
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

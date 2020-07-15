import React from 'react'
import styled from 'styled-components'
import Emoji from 'a11y-react-emoji'

const PostList = (props, key) => {
    const ID = props.boardNo
    const title = props.title
    const Excerpt = props.excerpt

    return (
        <ColumnBox key={key}>
            <RowBox>
                <PostNumber>{ID}</PostNumber>
                <Title>{title}</Title>
                <TagList>
                    <Tag color="green" textColor="white">
                        <span className="tagText">Active&nbsp;</span>
                        <Emoji symbol="✅" label="checked" />
                    </Tag>
                    <Tag color="skyblue" textColor="black">
                        <span className="tagText">Enhancement Improved&nbsp;</span>
                        <Emoji symbol="🚀" label="rocket" />
                    </Tag>
                </TagList>
            </RowBox>
            <TagExcerpt>{Excerpt ? Excerpt : 'none.'}</TagExcerpt>
            <hr className="separator" />
        </ColumnBox>
    )
}

export default PostList

const TagList = styled.div`
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

const Title = styled.div`
    color: #f8f9fa;
    font-weight: 600;
    font-size: 1.5rem;
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

    &:nth-of-type(n + 2) {
        margin-top: 2rem;
    }
`

const PostNumber = styled.div`
    color: #ced4da;
    min-width: 1.8rem;
    font-size: 1.1rem;
    align-self: flex-start;
    padding-top: 0.4rem;
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
`

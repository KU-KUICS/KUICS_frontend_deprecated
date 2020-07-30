import React from 'react'
import styled from 'styled-components'

const PostComment = () => {
    return <PostListBox>There are N Comments!</PostListBox>
}

const PostListBox = styled.div`
    display: flex;

    width: 100%;
    height: 100px;
    padding: 1rem 3rem 3rem 3rem;

    background: yellow;
`

export default PostComment

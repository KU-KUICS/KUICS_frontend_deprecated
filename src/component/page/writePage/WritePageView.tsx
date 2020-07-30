import React, { createRef } from 'react'
import { useHistory } from 'react-router-dom'
import { ScrollList } from '../../context/ContextListView'
import { Editor, Viewer } from '@toast-ui/react-editor'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import hljs from 'highlight.js'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import colorSyntaxHighlight from '@toast-ui/editor-plugin-color-syntax'
import styled from 'styled-components'

const WritePageView = () => {
    const editorRef = createRef<Editor>()
    const history = useHistory<History>()

    const handleClick = () => {
        if (editorRef.current === null) {
            console.log('null or undefined!')
        } else {
            console.log(editorRef.current.getInstance().getMarkdown())
            window.alert('submitted!')
        }
        history.goBack()
    }

    console.log(hljs.listLanguages())

    return (
        <ScrollList className="noScroll ViewList" style={{ marginTop: '2rem', padding: '2rem' }}>
            <div className="editor">
                <Editor ref={editorRef} />
            </div>
            <Viewer />
            <SubmitButton className="SubmitButton" onClick={handleClick}>
                SUBMIT
            </SubmitButton>
        </ScrollList>
    )
}

const SubmitButton = styled.button`
    appearance: none;
    margin-top: 2rem;
    align-self: flex-end;
    min-width: 10rem;
    min-height: 3rem;

    border-radius: 3rem;
    font-size: 1.125rem;
    border: none;
`

export default WritePageView

import React, { createRef } from 'react';
import { Button, Grommet, Main } from 'grommet';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const theme = {
    global: {
        colors: {
            brand: '#333333',
        },
    },
};

const WritePage = () => {
    const editorRef = createRef();

    const handleClickButton = () => {
        console.log(editorRef.current.getInstance().getMarkdown());
    };

    return (
        <Grommet theme={theme}>
            <Main pad="medium" background="brand">
                Write new Article on Board
            </Main>
            <Editor
                initialValue="# title"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
            />
            <Button
                primary
                hoverIndicator
                onClick={handleClickButton}
                style={{ fontWeight: 600, display: 'block', margin: '1rem 1rem 0 auto', padding: '0.5rem 1rem' }}
            >
                Submit
            </Button>
        </Grommet>
    );
};

export default WritePage;

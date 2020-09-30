import { Grid, Grommet, Main, Box, Heading, Text, Sidebar, Clock, Button } from 'grommet';
import React from 'react';
import { Link } from 'react-router-dom';
import { Edit as EditIcon } from 'grommet-icons';

const theme = {
    global: {
        colors: {
            bgcolor: '#f0f0f5',
            brand: '#333333',
        },
    },
};

const ArticleComponent = props => {
    return (
        <Link to={`/board/${props.id}`} style={{ marginBottom: '1rem', textDecoration: 'none', color: '#333333' }}>
            <Grid
                className="HoverStyle"
                rows={['xxsmall', 'flex']}
                columns={['flex', 'small']}
                style={{ backgroundColor: '#f0f0f5' }}
                gap="none"
                areas={[
                    { name: 'title', start: [0, 0], end: [0, 0] },
                    { name: 'excerpt', start: [0, 1], end: [0, 1] },
                    { name: 'metadata', start: [1, 0], end: [1, 1] },
                ]}
            >
                <Text weight="600" gridArea="title" margin={{ left: 'medium', top: 'medium' }}>
                    {props.heading}
                </Text>
                <Text gridArea="excerpt" margin={{ left: 'medium', top: 'none', bottom: 'medium', right: 'medium' }}>
                    {props.excerpt.replace(/(\r\n|\n|\r)/gm, ' ').substr(0, 200) + '...'}
                </Text>
                <Main gridArea="metadata" margin={{ top: 'medium', right: 'medium' }}>
                    {props.metadata.map(meta => {
                        return <Text>{meta}</Text>;
                    })}
                </Main>
            </Grid>
        </Link>
    );
};

const Background = () => {
    return (
        <div style={{ zIndex: -1, position: 'absolute', width: '100%' }}>
            <svg width="100%" viewBox="0 0 2000 620">
                <path
                    fill="#333333"
                    d="
                M 0 0
                V 520
                Q 1000 620 2000 520
                V -520
                Z
                "
                ></path>
            </svg>
        </div>
    );
};

const BoardPage = () => {
    return (
        <Grommet theme={theme}>
            <Background />
            <Main pad="large" fill="vertical">
                <Box gridArea="header" background="brand" direction="row" pad={{ bottom: 'small' }}>
                    <Heading level="3" style={{ margin: 'auto', marginLeft: '1rem' }}>
                        게시판 Board
                    </Heading>
                    <Clock
                        className="Clock"
                        type="digital"
                        style={{ marginLeft: 'auto', position: 'relative', top: '4px', verticalAlign: 'bottom' }}
                    />
                    <Button
                        primary
                        href="/board/write"
                        label="글쓰기"
                        pad="medium"
                        focusIndicator
                        color="bgcolor"
                        icon={<EditIcon />}
                        style={{ margin: 'auto', marginLeft: '1rem', marginRight: '1rem', padding: '0.3rem 1rem' }}
                    >
                        글쓰기
                    </Button>
                </Box>
                <Sidebar></Sidebar>

                <Box gridArea="main">
                    {ArticleComponent({
                        id: 1,
                        heading: 'hias',
                        excerpt:
                            'Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod.',
                        metadata: ['댓글 3000개', '좋아요 3000만개', '20190909'],
                    })}
                    {ArticleComponent({
                        id: 1,
                        heading: 'hias',
                        excerpt:
                            'Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod.',
                        metadata: ['댓글 3000개', '좋아요 3000만개', '20190909'],
                    })}
                    {ArticleComponent({
                        id: 1,
                        heading: 'hias',
                        excerpt:
                            'Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod. Aute ea do do nulla voluptate ad esse laboris officia incididunt duis esse. Magna deserunt fugiat ex elit adipisicing irure exercitation. Duis magna magna aliqua ex qui nostrud aliquip nostrud. Cillum elit elit Lorem est eiusmod.',
                        metadata: ['댓글 3000개', '좋아요 3000만개', '20190909'],
                    })}
                </Box>
            </Main>
        </Grommet>
    );
};

export default BoardPage;

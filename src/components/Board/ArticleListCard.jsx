import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter } from 'grommet';
import { Link } from 'react-router-dom';

/*
const ArticleListCard = (props) => {
    return (
        <Link
            to={`/board/${props.id}`}
            style={{
                marginBottom: '1rem',
                textDecoration: 'none',
                color: '#333333',
            }}
        >
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
                <Text
                    weight="600"
                    gridArea="title"
                    margin={{ left: 'medium', top: 'medium' }}
                >
                    {props.heading}
                </Text>
                <Text
                    gridArea="excerpt"
                    margin={{
                        left: 'medium',
                        top: 'none',
                        bottom: 'medium',
                        right: 'medium',
                    }}
                >
                    {props.excerpt
                        .replace(/(\r\n|\n|\r)/gm, ' ')
                        .substr(0, 200) + '...'}
                </Text>
                <Main
                    gridArea="metadata"
                    margin={{ top: 'medium', right: 'medium' }}
                >
                    {props.metadata.map((meta) => {
                        return <Text>{meta}</Text>;
                    })}
                </Main>
            </Grid>
        </Link>
    );
};
*/

const CustomHeader = styled.div`
    font-size: 30px;
`;

const Spacer = styled.div`
    margin: 10px;
`;

const ArticleListCard = (props) => {
    return (
        <Link to={`/boards/${props.id}`}>
            <Spacer>
                {' '}
                <Card height="small" width="xxlarge" background="light-1">
                    <CardHeader pad="medium">
                        <CustomHeader>{props.heading}</CustomHeader>
                    </CardHeader>
                    <CardBody pad={{ horizontal: 'medium' }}>
                        {props.excerpt}
                    </CardBody>
                    <CardFooter
                        pad={{ horizontal: 'medium', vertical: 'small' }}
                        background="dark-2"
                    >
                        {props.metadata}
                    </CardFooter>
                </Card>
            </Spacer>
        </Link>
    );
};

export default ArticleListCard;

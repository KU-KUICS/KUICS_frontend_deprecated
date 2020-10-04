import React from 'react';
import { Grommet, Text, Main, Heading, Paragraph, Grid, Box } from 'grommet';
import useFetch from '../Hooks/useFetch';
import Wave from '../Styles/Wave';

import IntroLogo from './IntroPage/IntroLogo';
import IntroHistory from './IntroPage/IntroHistory';

const IntroPage = () => {
    // const data = useFetch('http://test.kuics.kro.kr:4000/api/intro');
    // console.log(data);

    const theme = {
        global: {
            colors: {
                brand: '#ffffff',
            },
            size: {
                full: '100%',
            },
        },
    };

    return (
        <Grommet theme={theme}>
            <IntroLogo />
            <IntroHistory />
            <Main
                fill="horizontal"
                pad={{ top: 'medium', horizontal: 'large', bottom: 'medium' }}
                align="center"
                alignContent="start"
            >
                <div style={{ display: 'flex', width: '70%', flexWrap: 'wrap' }}>
                    <Box style={{ width: '50%' }} gridArea="notice" pad={{ horizontal: 'large', top: 'none' }}>
                        <Heading level="3" margin={{ bottom: 'small' }} style={{ textAlign: 'center' }}>
                            공지사항
                        </Heading>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1sdsdsdsdsdsds</Paragraph>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                    </Box>
                    <Box style={{ width: '50%' }} gridArea="board" pad={{ horizontal: 'large', top: 'none' }}>
                        <Heading level="3" margin={{ bottom: 'small' }} style={{ textAlign: 'center' }}>
                            게시판
                        </Heading>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                        <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                    </Box>
                </div>
            </Main>
        </Grommet>
    );
};

export default IntroPage;

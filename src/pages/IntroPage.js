import React from 'react';
import { Grommet, Text, Main, Heading, Paragraph, Grid, Box } from 'grommet';
import useFetch from '../Hooks/useFetch';
import Wave from '../Styles/Wave';
import { BrowserRouter as Router } from 'react-router-dom';

const IntroPage = () => {
    // const data = useFetch('http://test.kuics.kro.kr:4000/api/intro');
    // console.log(data);

    const data =
        'KUICS는 고려대학교 정보보호학회로, 각종 CTF 및 보안 대회 수상 경력이 있으며 고려대학교 컴퓨터학과 학우분들의 보안 관심을 높이는 데에 기여하고 있습니다.';

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
            <Main
                fill="horizontal"
                pad={{ top: 'large', horizontal: 'large', bottom: 'none' }}
                background="dark-1"
                align="center"
                alignContent="start"
            >
                <Heading level="1" margin="none">
                    KUICS
                </Heading>
                <Heading level="2" margin={{ top: 'none', bottom: 'medium' }}>
                    고려대학교 정보보호학회
                </Heading>

                <div style={{ textAlign: 'center' }}>
                    <Text size="xlarge" margin="none" weight="600">
                        K
                    </Text>
                    <Text size="large" margin="none" weight="400">
                        orea{' '}
                    </Text>
                    <Text size="xlarge" margin="none" weight="600">
                        U
                    </Text>
                    <Text size="large" margin="none" weight="400">
                        niversity{' '}
                    </Text>
                    <Text size="xlarge" margin="none" weight="600">
                        I
                    </Text>
                    <Text size="large" margin="none" weight="400">
                        nstitute of{' '}
                    </Text>
                    <Text size="xlarge" margin="none" weight="600">
                        C
                    </Text>
                    <Text size="large" margin="none" weight="400">
                        omputer{' '}
                    </Text>
                    <Text size="xlarge" margin="none" weight="600">
                        S
                    </Text>
                    <Text size="large" margin="none" weight="400">
                        ecurity
                    </Text>
                </div>

                <Paragraph
                    margin={{
                        top: 'medium',
                    }}
                >
                    {data}
                </Paragraph>
            </Main>
            <Wave />
            <Grid
                columns={['flex', 'flex']}
                rows={['medium']}
                gap="small"
                areas={[
                    { name: 'notice', start: [0, 0], end: [0, 0] },
                    { name: 'board', start: [1, 0], end: [1, 0] },
                ]}
            >
                <Box gridArea="notice" pad={{ horizontal: 'large', top: 'none' }}>
                    <Heading level="3" margin={{ bottom: 'small' }}>
                        공지사항
                    </Heading>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1sdsdsdsdsdsds</Paragraph>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                </Box>
                <Box gridArea="board" pad={{ horizontal: 'large', top: 'none' }}>
                    <Heading level="3">게시판</Heading>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                    <Paragraph margin={{ vertical: 'small' }}>dummy 1</Paragraph>
                </Box>
            </Grid>
        </Grommet>
    );
};

export default IntroPage;

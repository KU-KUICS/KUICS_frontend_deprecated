import React from 'react';
import Wave from '../../Styles/Wave';
import { Main, Heading, Text, Paragraph } from 'grommet';

const IntroLogo = () => {
    const data =
        'KUICS는 고려대학교 정보보호학회로, 각종 CTF 및 보안 대회 수상 경력이 있으며 고려대학교 컴퓨터학과 학우분들의 보안 관심을 높이는 데에 기여하고 있습니다.';

    return (
        <div style={{ backgroundColor: '#ccc' }}>
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
            <Wave color="#333333" />
        </div>
    );
};

export default IntroLogo;

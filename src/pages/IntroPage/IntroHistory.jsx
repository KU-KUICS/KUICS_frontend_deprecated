import React from 'react';
import { Heading, Main, Text, Paragraph } from 'grommet';
import Wave from '../../Styles/Wave';

const IntroHistory = () => {
    const data = {
        2005: ['KUICS 설립'],
        2007: ['KISA 지원 동아리로 선정', 'PADOCON (전국보안동아리연합) 활동'],
        2010: ['KUICS CTF 1회', 'KUCIS 활동', 'KUSISWALL 세미나 시작'],
        2012: ['KUICS CTF 2회', 'Incognito Conference 1회 회장'],
        2013: ['KUICS CTF 3회', 'Incognito Conference 2회 회장'],
        2014: ['KUICS CTF 4회', 'Incognito Conference 3회 회장'],
        2015: ['10주년 기념식', 'Incognito Conference 4회 회장'],
        2016: ['Incognito Conference 5회 회장'],
        2017: ['Incognito Conference 6회 회장'],
        2018: ['Incognito Conference 7회 회장'],
    };

    const theme = {
        global: {
            colors: {
                brand: '#ffffff',
            },
        },
    };

    const items = [];
    for (const key in data) {
        items.push(
            <Main align="center" style={{ width: '50%' }}>
                <Heading level={3} margin={{ bottom: 'none' }}>
                    {key}년
                </Heading>
                {data[key].map(line => {
                    return <Text>{line}</Text>;
                })}
            </Main>
        );
    }

    return (
        <>
            <Main
                fill="horizontal"
                pad={{ top: 'medium', horizontal: 'large', bottom: 'medium' }}
                background="#ccc"
                align="center"
            >
                <Heading margin={{ vertical: 'none' }}>History</Heading>
                <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>{items}</div>
            </Main>
            <Wave color="#ccc" />
        </>
    );
};

export default IntroHistory;

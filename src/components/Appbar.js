import React from 'react';
import { Grommet, Header, Text, Button, Anchor, Nav, Menu, ResponsiveContext } from 'grommet';
import { Login as LoginIcon } from 'grommet-icons';

const theme = {
    global: {
        colors: {
            header: '#f0f0f5',
            brand: '#333333',
        },
    },
    anchor: {
        color: {
            light: 'brand',
        },
        fontWeight: 400,
        textDecoration: 'none',
        hover: {
            extend: {
                color: 'red',
            },
        },
    },
};

const Appbar = () => {
    return (
        <Grommet theme={theme}>
            <ResponsiveContext.Consumer>
                {size => (
                    <Header background="header" pad="medium" border={{ color: 'border', side: 'bottom' }} gap="none">
                        <Anchor href="/" alignSelf="center" size="xlarge" margin="none" style={{ fontWeight: 600 }}>
                            KUICS
                        </Anchor>
                        {size !== 'small' ? (
                            <Nav direction="row" align="center" className="NavBar">
                                <Anchor label="소개" href="info" />
                                <Anchor label="오시는 길" href="/where" />
                                <Anchor label="문의" href="/qna" />
                                <Anchor label="CTF" href="/CTF" />
                                <Anchor label="게시판" href="/board" />
                                <Button
                                    primary
                                    focusIndicator
                                    color="brand"
                                    icon={<LoginIcon />}
                                    href="/login"
                                    label="Login"
                                />
                            </Nav>
                        ) : (
                            <Menu
                                label="Menu"
                                className="NavBarMobile"
                                items={[
                                    { label: '소개' },
                                    { label: '오시는 길' },
                                    { label: '문의' },
                                    { label: 'CTF' },
                                    { label: '게시판' },
                                    { label: '로그인' },
                                ]}
                            ></Menu>
                        )}
                    </Header>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
};

export default Appbar;

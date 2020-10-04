import React from 'react';
import { Grommet, Header, Text, Button, Anchor, Nav, Menu, ResponsiveContext } from 'grommet';
import { Login as LoginIcon } from 'grommet-icons';
import { Link } from 'react-router-dom';

const theme = {
    global: {
        colors: {
            header: '#f0f0f5',
            brand: '#333333',
        },
    },
    anchor: {
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
                        <Link to="/">
                            <Anchor alignSelf="center" size="xlarge" margin="none" style={{ fontWeight: 600 }}>
                                KUICS
                            </Anchor>
                        </Link>
                        {size !== 'small' ? (
                            <Nav direction="row" align="center" className="NavBar">
                                <Link to="/history">
                                    <Anchor label="역사" />
                                </Link>
                                <Link to="/qna">
                                    <Anchor label="문의" />
                                </Link>
                                <Link to="/CTF">
                                    <Anchor label="CTF" />
                                </Link>
                                <Link to="/board">
                                    <Anchor label="게시판" />
                                </Link>
                                <Link to="/login">
                                    <Button primary focusIndicator color="brand" icon={<LoginIcon />} label="Login" />
                                </Link>
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

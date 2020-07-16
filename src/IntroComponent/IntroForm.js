import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import About from './About'
import LoginModal from './LoginModal'

const IntroForm = () => {
    const [aboutState, setAboutState] = useState(false)
    const [modalState, setModalState] = useState(false)

    const clickEvent = (func, state) => {
        func(!state)
    }

    return (
        <>
            <ColumnLayout>
                <RowLayout>
                    <StyledCenterRightLine>
                        <img
                            className="logo"
                            alt="KUICS logo"
                            style={{ width: '6rem' }}
                            src="./static/kuics-logo.svg"
                        />
                        <h1>KUICS</h1>
                    </StyledCenterRightLine>
                    <StyledCenter>
                        <h2>고려대학교 컴퓨터학과 정보보호학회</h2>
                        <h3 style={{ color: '#e4e7eb', fontWeight: '400' }}>
                            Korea University Institute of Computer Security
                        </h3>
                        <StyledRight>
                            <span
                                style={{ marginRight: '10px' }}
                                onClick={() => clickEvent(setAboutState, aboutState)}
                            >
                                {'소개'}
                            </span>
                            <span onClick={() => clickEvent(setModalState, modalState)}>로그인</span>
                        </StyledRight>
                    </StyledCenter>
                </RowLayout>
                {aboutState ? (
                    <StyledShrink>
                        <About />
                    </StyledShrink>
                ) : (
                    ''
                )}
            </ColumnLayout>
            <LoginModal isOpen={modalState} close={() => clickEvent(setModalState, modalState)} />
        </>
    )
}

const StyledShrink = styled.div`
    display: inline-box;

    background-color: #262c34;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    padding: 20px;

    margin-top: 10px;
    flex-shrink: 1;
    flex-basis: 0;
`

const ColumnLayout = styled.div`
    padding: 30px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: -webkit-flex;
    -webkit-align-item: center;
    -webkit-justify-content: center;
`

const RowLayout = styled.div`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    position: relative;
    background-color: #262c34;
    border-radius: 15px;
    padding: 30px;
    margin: 20px;

    flex-shrink: 1;
    flex-basis: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    display: -webkit-flex;
    -webkit-align-item: center;
    -webkit-justify-content: center;
`

const StyledCenter = styled.div`
    h2 {
        font-size: 2rem;
    }
    padding-left: 20px;
`

const StyledCenterRightLine = styled.div`
    text-align: center;
    border-right: #e9ecef 1px solid;
    padding-right: 20px;
`

const StyledRight = styled.div`
    span {
        font-size: 1.125rem;
    }
    text-align: left;
    position: relative;

    font-weight: 600;
    bottom: -4px;
`

export default IntroForm

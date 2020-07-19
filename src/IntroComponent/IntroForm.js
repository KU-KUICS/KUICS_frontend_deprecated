import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import DarkModeToggle from '../DarkModeToggle'
import About from './About'
import LoginModal from './LoginModal'

const IntroForm = () => {
    const [modalState, setModalState] = useState(false)
    const [loading, reverseLoading] = useState(false)

    const clickEvent = (func, state) => {
        func(!state)
    }

    return (
        <>
            <AbsoluteLayout>
                <TmpBox>
                    <DarkModeToggle />
                </TmpBox>
                <RowLayout className="Header">
                    <StyledCenterRightLine>
                        <img
                            className="logo"
                            alt="KUICS logo"
                            style={{
                                width: '6rem',
                            }}
                            src="./static/kuics-logo.svg"
                        />
                        <h1>KUICS</h1>
                    </StyledCenterRightLine>
                    <StyledCenter>
                        <h2>고려대학교 컴퓨터학과 정보보호학회</h2>
                        <h3 style={{ fontWeight: '400' }}>Korea University Institute of Computer Security</h3>
                        <StyledRight>
                            <span onClick={() => clickEvent(setModalState, modalState)}>로그인</span>
                        </StyledRight>
                    </StyledCenter>
                </RowLayout>
                <StyledShrink state={loading} className="Introduction">
                    <IntroBox>
                        <About changeFunction={reverseLoading} />
                    </IntroBox>
                </StyledShrink>{' '}
            </AbsoluteLayout>
            <LoginModal isOpen={modalState} close={() => clickEvent(setModalState, modalState)} />
        </>
    )
}

const TmpBox = styled.div`
    display: inline-block;
    margin-bottom: 4rem;
    text-align: right;
    width: 100%;
    left: -1rem;
    top: -2rem;
    position: relative;
`

const IntroBox = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    text-align: center;
    border-radius: 50px;

    background-position: 50% 35%;

    div {
        color: white;
    }
`

// background-color: #262c34;
const StyledShrink = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;

    margin: 0 1.5rem;

    border-radius: 50px;

    visibility: ${props => (props.state ? 'visible' : 'hidden')};
    animation: ${props => (props.state ? fadeOut : fadeIn)} 0.7s linear;
    transition: visibility 0.7s linear;

    height: fit-content;

    align-self: stretch;
`

const fadeIn = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const AbsoluteLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: -1;
`

// background-color: #262c34;
const RowLayout = styled.div`
    position: relative;
    padding: 30px;
    margin: 0 1.5rem 2rem 1.5rem;

    flex-shrink: 1;
    flex-basis: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    display: -webkit-flex;
    -webkit-align-item: center;
    -webkit-justify-content: center;

    border-radius: 50px;
    align-self: stretch;
`

const StyledCenter = styled.div`
    h2 {
        font-size: 2rem;
    }
    position: relative;
    top: -5px;
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

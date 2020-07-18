import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
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
                            <span onClick={() => clickEvent(setModalState, modalState)}>로그인</span>
                        </StyledRight>
                    </StyledCenter>
                </RowLayout>
                <StyledShrink state={loading}>
                    <About changeFunction={reverseLoading} />
                </StyledShrink>
            </AbsoluteLayout>
            <LoginModal isOpen={modalState} close={() => clickEvent(setModalState, modalState)} />
        </>
    )
}

const StyledShrink = styled.div`
    position: relative;
    display: block;

    background-color: #262c34;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 20px;

    visibility: ${props => (props.state ? 'visible' : 'hidden')};
    animation: ${props => (props.state ? fadeOut : fadeIn)} 0.7s linear;
    transition: visibility 0.7s linear;

    width: auto;

    margin-top: 10px;
    flex-shrink: 1;
    flex-basis: 0;
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
    padding: 30px;
    width: fit-content;
    align-items: center;
`

const RowLayout = styled.div`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    position: relative;
    background-color: #262c34;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 1rem;

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

import React, { createRef, forwardRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'

import './SearchBar.scss'

const SearchBar = () => {
    const ref = createRef()
    const BarComponent = forwardRef((props, ref) => {
        return <Bar type="text" ref={ref} placeholder="Search" />
    })

    const debug = () => console.log(ref.current.value)
    // const bar =

    return (
        <>
            <BarComponent className={'Bar'} ref={ref} />
            <FiSearch style={{ top: '4px', position: 'relative', paddingLeft: '1rem' }} onClick={debug} />
        </>
    )
}
//background - color: #262c34;

const Bar = styled.input`
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
    border: none;
    height: 2.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: white;
    position: relative;
    padding: 0 1rem 0 1rem;

    width: 30%;
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
`
/*
animation: barFade 1s cubic-bezier(0.56, 0.01, 0.73, 0.94) 0.5s forwards;

    @keyframes barFade {
        from {
            width: 0px;
        }
        to {
            width: 150px;
        }
    }*/

export default SearchBar

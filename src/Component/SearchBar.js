import React, { createRef, forwardRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'

import './SearchBar.scss'

const SearchBar = () => {
    const ref = createRef()

    const BarComponent = forwardRef((props, ref) => {
        return <Bar type="text" ref={ref} placeholder=" " />
    })

    const debug = () => console.log(ref.current.value)

    return (
        <>
            <BarComponent className={'Bar'} ref={ref} />
            <FiSearch onClick={debug} />
        </>
    )
}

const Bar = styled.input`
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    margin-right: 10px;
    height: 30px;
    font-size: 1.2rem;
    color: white;
    position: relative;
    top: -5px;
`

export default SearchBar

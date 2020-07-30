import React, { ReactPropTypes, useEffect, useState, useRef } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import styled from 'styled-components'
import QuerySearch from './QuerySearch'
import CreatableSelect from 'react-select/creatable'
import { Link } from 'react-router-dom'

interface Props {
    state: boolean
    setState: (boolean) => void
}

export const recOptions = [
    { value: 'user:', label: '유저:' },
    { value: 'duration:', label: '기간:' },
    { value: 'recommend:asc', label: '추천:오름차순' },
    { value: 'recommend:desc', label: '추천:내림차순' },
    { value: 'recent:asc', label: '최근:오름차순' },
    { value: 'recent:desc', label: '최근:내림차순' },
    { value: 'title:', label: '제목' },
    { value: 'body', label: '본문' },
]

export const handleChange = (newValue: any, actionMeta: any) => {}

const Search = ({ state, setState }) => {
    const revState = () => {
        console.log('hi')
        setState(!state)
    }

    const headerRef = useRef<React.RefAttributes<HTMLDivElement>>()
    const [logoState, setLogoState] = useState<boolean>(false)

    const Scroll = () => {
        if (document.documentElement.scrollTop > 165) {
            setLogoState(true)
        } else {
            setLogoState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', Scroll)
    })

    return (
        <ColBox ref={headerRef as any}>
            <RowBox>
                <Write className="Bar" to="/write">
                    <BsPlusCircle
                        style={{ width: '1rem', height: '1rem', position: 'relative', paddingRight: '0.625rem' }}
                    />{' '}
                    &nbsp;글쓰기
                </Write>

                <StyledSearch>
                    <QuerySearch func={revState} />
                </StyledSearch>
            </RowBox>
        </ColBox>
    )
}

export default Search

export const DropDown = styled(CreatableSelect)`
    appearance: none;
    font-size: 1rem;
    flex: 1;

    .recommend__placeholder {
        font-size: 1rem;
    }

    .recommend__control,
    .recommend__option {
        border: none;
        background: transparent;
        border-radius: 2rem;
    }

    .recommend__menu,
    .recommend__menu-list {
        appearance: none;
        border: none !important;
        border-radius: 1rem;
        background: transparent;
    }

    .recommend__multi-value__remove {
        display: none;
    }

    .recommend__multi-value,
    .recommend__multi-value__label {
        border-radius: 1rem;
    }

    .recommend__value-container {
        margin-left: 0.5rem;
    }
`
const ColBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 2rem 1rem;

    position: sticky;
    position: --webkit-sticky;
    top: 0;
    z-index: 1;
`

interface advSearch {
    readonly state: boolean
}

const AdvancedSearch = styled.div<advSearch>`
    visibility: ${props => (props.state ? 'visible' : 'hidden')};
    opacity: ${props => (props.state ? '1' : '0')};
    height: ${props => (props.state ? 'auto' : '0px')};
    padding-top: ${props => (props.state ? '1rem' : '0')};

    transition: opacity 0.4s ease;
    position: relative;
    z-index: 1;

    display: flex;
    width: 100%;
`

const Write = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledSearch = styled.span`
    flex-grow: 1;
    flex-basis: 0;

    text-align: right;
    font-size: 1.5rem;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { DropDown, recOptions } from './Search'
import styled from 'styled-components'

import './QuerySearch.scss'

interface Props {
    func: any
}

const QuerySearch: React.FC<Props> = ({ func }) => {
    const ref = React.createRef<HTMLInputElement>()

    const handleChange = (newValue: any, actionMeta: any) => {
        console.log({ newValue })
    }

    const BarComponent = React.forwardRef((props, ref) => {
        return <input className="Bar Search" type="text" ref={ref as any} placeholder="Search" />
    })
    //<BarComponent ref={ref} />
    return (
        <>
            <Wrapper>
                <DropDown
                    classNamePrefix={'recommend'}
                    options={recOptions}
                    isMulti
                    onChange={handleChange}
                    placeholder={'검색'}
                />
                <FiSearch
                    onClick={func}
                    style={{
                        top: '7px',
                        position: 'relative',
                        paddingLeft: '1rem',
                    }}
                />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 40%;
    min-width: 200px;
    margin: 0;
    display: flex;
    margin-left: auto;
`

export default QuerySearch

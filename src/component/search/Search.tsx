import React, { ReactPropTypes, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import 'react-dates/initialize'
import 'react-dates/constants'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { Moment } from 'moment'

import './DateRangePicker.scss'

interface Props {
    state: boolean
    setState: Function
}

const Search: React.FC<Props> = ({ state, setState }) => {
    const revState = () => {
        console.log('hi')
        setState(!state)
    }

    const [date, setDate] = useState<{ startDate: Moment | null; endDate: Moment | null }>({
        startDate: null,
        endDate: null,
    })

    const [focused, focusing] = useState<'startDate' | 'endDate' | null>(null)

    return (
        <ColBox>
            <RowBox>
                <Write>
                    <BsPlusCircle style={{ top: '2px', width: '1.5rem', height: '1.5rem', position: 'relative' }} />{' '}
                    &nbsp;글쓰기
                </Write>
                <StyledSearch>
                    <SearchBar func={revState} />
                </StyledSearch>
            </RowBox>
            <AdvancedSearch state={state}>
                <PickerStyle
                    state={state}
                    startDate={date.startDate}
                    startDateId="start_date_id"
                    endDate={date.endDate}
                    endDateId="end_date_id"
                    onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })}
                    focusedInput={focused}
                    onFocusChange={focused => focusing(focused)}
                />
            </AdvancedSearch>
        </ColBox>
    )
}

export default Search

const ColBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 2rem 0;
    margin: 0 1.125rem;
`

interface advSearch {
    readonly state: boolean
}

const PickerStyle = styled(DateRangePicker)<advSearch>`
    transition: opacity 0.4s ease;
    position: relative;
    z-index: 1;
`

const AdvancedSearch = styled.div<advSearch>`
    visibility: ${props => (props.state ? 'visible' : 'hidden')};
    opacity: ${props => (props.state ? '1' : '0')};
    height: ${props => (props.state ? 'auto' : '0px')};
    padding-top: ${props => (props.state ? '1rem' : '0')};

    transition: opacity 0.4s ease;
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Write = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
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

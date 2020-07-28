import React from 'react'
import { FiSearch } from 'react-icons/fi'

import './SearchBar.scss'

interface Props {
    func: any
}

const SearchBar: React.FC<Props> = ({ func }) => {
    const ref = React.createRef<HTMLInputElement>()

    const BarComponent = React.forwardRef((props, ref) => {
        return <input className="Bar" type="text" ref={ref as any} placeholder="Search" />
    })

    return (
        <>
            <BarComponent ref={ref} />

            <FiSearch onClick={func} style={{ top: '4px', position: 'relative', paddingLeft: '1rem' }} />
        </>
    )
}

export default SearchBar

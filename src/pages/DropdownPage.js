import Dropdown from '../components/Dropdown'
import {useState} from 'react'

export default function DropdownPage() {
    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        {value: 'red', label: 'Red'},
        {value: 'green', label: 'Green'},
        {value: 'blue', label: 'Blue'}
    ]

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect}/>
        </div>
    )
}
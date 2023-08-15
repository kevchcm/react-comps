import {useEffect, useRef, useState} from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

export default function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        if(!divEl.current){
            return
        }
        const handler = (event) => {
            if(!divEl.current?.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => document.removeEventListener('click', handler)
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-poiner"
                onClick={handleClick}>
                { value?.label || 'Select...'}
                <GoChevronDown className={isOpen && 'rotate-180'}/>
            </Panel>

            {
                isOpen &&
                <Panel className="absolute top-full">
                    {
                        options.map(option => {
                            return (
                                <div className="rounded cursor-pointer p-1 hover:bg-sky-100"
                                     onClick={()=> handleOptionClick(option)} key={option.value}>
                                    {option.label}
                                </div>
                            )
                        })
                    }
                </Panel>
            }
        </div>
    )
}
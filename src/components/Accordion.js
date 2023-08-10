import {useState} from 'react'
import  { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import classNames from 'classnames'

export default function Accordion ({ items }) {
    const [expandedItem, setExpandedItem] = useState(-1)

    const handleClick = (index) => {
        //this is to get the most updated value of the expandedItem
        //we can use setExpandedItem() with no issue
        setExpandedItem(currentExpandedItem=>{
            if(currentExpandedItem === index){
                return -1
            }else{
                return index
            }
        })
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedItem

        const iconClass = classNames('font-extrabold text-2xl')

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                     onClick={()=> {handleClick(index)}}>
                    {item.label}

                    {isExpanded ? <GoChevronDown className={iconClass}/> : <GoChevronLeft className={iconClass}/>}
                </div>
                {
                    isExpanded && (
                        <div className="border-b p-5">
                            {item.content}
                        </div>
                    )
                }
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}
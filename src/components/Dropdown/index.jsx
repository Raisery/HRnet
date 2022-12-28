import { useState } from 'react'
import './index.css'

/**
 * Component for displaying a scrolling menu
 *
 * @returns A scrolling menu
 */
export default function Dropdown({
    className = '',
    inputId,
    data,
    required = false,
}) {
    const [selected, setSelected] = useState('')
    const [selecting, setSelecting] = useState(false)

    function handleSelecting(event) {
        if (selecting) return
        setSelecting(true)
    }

    function handleSelectItem(event) {
        setSelecting(false)
        setSelected(event.target.innerHTML)
    }

    const menu = []
    data.forEach((item, index) => {
        menu.push(
            <p
                className="dropdown__menu__item"
                key={item + index}
                onClick={handleSelectItem}
            >
                {item}
            </p>
        )
    })

    return (
        <div className={className + ' dropdown'} onClick={handleSelecting}>
            <input
                readOnly={true}
                type="text"
                name=""
                id={inputId}
                value={selected}
                required={required}
            />
            <i className="fas fa-chevron-down"></i>
            <div className={'dropdown__menu ' + (selecting ? '' : 'invisible')}>
                {menu}
            </div>
        </div>
    )
}

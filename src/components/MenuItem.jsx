import React from 'react'

const MenuItem = ({ active, itemName, onClick }) => {
    return (
        <li className={active ? 'navbar__option_selected' : null} onClick={onClick}>{itemName}</li>
    )
}

export default MenuItem
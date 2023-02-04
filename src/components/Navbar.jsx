import React, { useState } from 'react'
import menu_icon from '../assets/sandwich_menu.jpg'
import pavos from '../assets/pavos.jpg'
import MenuItem from './MenuItem';

const Navbar = () => {
    const [chosen, setChosen] = useState();
    const menuOptions = ['JUEGA', 'PASE DE BATALLA', 'COMPITE', 'TIENDA DE OBJETOS', 'CARRERA', 'MONEDAS V']

    return (
        <div className='navbar'>
            <div className="navbar__menu">
                <img src={menu_icon} alt="" width={'45px'} />
            </div>
            <div className="navbar__options">
                <ul>
                    {menuOptions.map(item => <MenuItem key={item} itemName={item} active={item === chosen} onClick={() => setChosen(item)} />)}
                </ul>
            </div>
            <div className="navbar__pavos">
                <img src={pavos} alt="" width={'90px'} />
            </div>
        </div>
    )
}

export default Navbar
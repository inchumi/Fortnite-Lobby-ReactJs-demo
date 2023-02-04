import React from 'react'
import estrellas from '../assets/estrellas.jpg'

const LeftSideBar = () => {
    return (
        <div className='leftSideBar'>
            <div className="leftSideBar__content">
                <ul>
                    <li>CAPÍTULO 4</li>
                    <li>TEMPORADA 1</li>
                    <li><img src={estrellas} alt="" width={'290px'}/></li>
                    <li><div className="btn-cta"><div className="module-border-wrap"><button className='btn btn-blue '>¡NUEVAS MISIONES!</button></div></div></li>
                    <li>RECURSOS DE TEMPORADA 1</li>
                    <li>ESTRELLAS DE BATALLA ⭐ <span style={{color:'white'}}>86</span></li>
                    <li>BARRAS 🥇 <span style={{color:'white'}}>216</span></li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar
import React from 'react'

const RigthSidebar = () => {
    return (
        <div className='rightSidebar'>
            <div className="rightSidebar__content">
                <ul>
                    <li>BRASIL</li>
                    <li>
                        <div className="carrousel">
                            <div className="overlay" />
                            <div className="text-inside-overlay">TROPICAL THUNDER</div>
                            <div className="active-container">
                                <div className="active-line" />
                                <div className="active-line" />
                                <div className="active-line" />
                                <div className="active-line" />
                            </div>
                        </div>
                    </li>
                    <li><div className="gamemode-container">
                        <div className="gamemode">
                            <div className="black-overlay">
                            </div>
                        </div>
                        <div className="text-block">CERO CONTRUCCIÓN</div>
                    </div>
                    </li>
                    <li><div className="btn-cta"><div className="module-border-wrap"><button className='btn-blue '><marquee behavior="scroll" direction="left"> CERO CONSTRUCCIÓN - EN DIRECTO </marquee><br /><div className="text-cyan">LLENAR</div></button></div></div></li>
                    <li><div className="btn-cta"><button className='btn btn-yellow'>¡TODO LISTO!</button></div></li>
                </ul>
            </div>
        </div>
    )
}

export default RigthSidebar
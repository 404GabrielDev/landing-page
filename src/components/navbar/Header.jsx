import './Header.css'
import {menu, suv, instagram, whatsapp, facebook, closeIcon} from '../../assets/images'
import { useState } from 'react'

const Header = () => {

    const[openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
        <header className='header'>
            <div className='navbar-mobile'>
                <div><h1>Best Experience</h1></div>

                <div>
                    <img style={{cursor: 'pointer'}} onClick={toggleMenu} src={menu} alt='icon-menu' />
                </div>
            </div>

            <div className={`burger-menu ${openMenu ? 'open' : ''}`}>
                <div>
                    <div className='title-burger-menu'>
                        <div>
                        <h1>Home</h1>
                        </div>

                        <div className='close-icon'>
                            <img onClick={toggleMenu} src={closeIcon} alt='icon' />
                        </div>

                    </div>

                    <div className='p1'>
                        <p>best dealership in the city</p>
                    </div>

                    <div className='navbar-burger'>
                        <ul>
                            <li>Services</li>
                            <li>Cars</li>
                            <li>Contact</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    <div className='redes-sociais'>
                        <div>
                            <h2>Social Media:</h2>
                        </div>

                        <div className='icons-redes-sociais'>
                            <img src={instagram} alt='icon' />
                            <img src={facebook} alt='icon' />
                            <img src={whatsapp} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}

export default Header;
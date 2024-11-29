import './Header.css'
import {menu, suv} from '../../assets/images'

const Header = () => {
    return (
        <>
        <header className='header'>
            <div className='navbar-mobile'>
                <div>Best Experience</div>

                <div>
                    <img src={menu} alt='icon-menu' />
                </div>
            </div>

        </header>
        </>
    )
}

export default Header;
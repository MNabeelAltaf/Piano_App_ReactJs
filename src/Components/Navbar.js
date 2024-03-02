import './Navbar.css'
import logo from './images/logo.png';

const Navbar = () => {
    return (
        <div className="mainContainer_navbar" >
            <div className='cont0_navbar'>
                <div className='cont1_navbar'>
                    <img src={logo} className='logo' />
                    <a href='#' className='nav_bar_txt'>Musical Scales Games</a>
                </div>

                <div className='cont2_navbar'>
                    <a href="#" className='nav_btns' >Major Scales</a>
                    <a href="#" className='nav_btns' >Major Pentatonic</a>
                    <a href="#" className='nav_btns' >Major Blues</a>
                </div>
                <div className='cont3_navbar'>
                    <a href="#" className='nav_btns' >Minor Scales</a>
                    <a href="#" className='nav_btns' >Minor Pentatonic</a>
                    <a href="#" className='nav_btns' >Minor Blues</a>
                </div>
                <div className='cont3_navbar'>
                    {/* <a href="#" className='nav_btns' >Logout</a> */}

                </div>
            </div>
        </div>
    )
}

export default Navbar;
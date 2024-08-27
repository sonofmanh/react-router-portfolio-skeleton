
import { BiHome } from 'react-icons/bi';
import './nav.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav_holder'>
            <NavLink id='house' to='/'><BiHome/></NavLink>

            <div className="link">
                <NavLink className='navlinks' to='/'> home</NavLink>
                <NavLink className='navlinks' to='about'>about</NavLink>
                <NavLink className='navlinks' to='service'>services</NavLink>
                <NavLink className='navlinks' to='contact'>contact</NavLink>

            </div>
        </div>
    )
}

export default Nav
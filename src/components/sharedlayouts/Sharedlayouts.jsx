
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Sharedlayouts = () => {
    return (
        <div>
            <Nav/>
            <Outlet />
        </div>
    )
}

export default Sharedlayouts
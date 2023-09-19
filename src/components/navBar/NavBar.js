import { Button } from 'react-bootstrap';
import'./NavBar.scss'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div className='nav-bar'>
            <div>
            <img className='nav-brand' src='https://1.bp.blogspot.com/-Jget6YyZhNY/XY8Am-tv5OI/AAAAAAAAD5Y/vBgyByRfbbgX7QhzDIv_hyh-8nYkJaoVwCLcBGAsYHQ/s320/Government%2Bof%2BBangladesh.png'/>
            </div>
            <div>
            <Link to={'/courses'}>Course</Link >
            <Link to={'/applies'}>Apply</Link >
            <Link to={'/abouts'}>About</Link >
            <Link to={'/contact-us'}> <Button variant="danger" className='ms-2'>Contact Us</Button></Link>
            <Link to={'/log-in'}>Log In</Link>
            </div>
        </div>
    );
}

export default NavBar;
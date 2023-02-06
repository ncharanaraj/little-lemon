import { NavLink } from 'react-router-dom';
import "../assets/style/nav.css"
import Header from './Header';

function Nav(){
    return(
        <>
            <nav>
                <div>
                    <Header />
                </div>
                <div>
                    <NavLink className="navLink" to="/">Home</NavLink>
                    <NavLink className="navLink" to="/about">About</NavLink>
                    <NavLink className="navLink" to="/menu">Menu</NavLink>
                    <NavLink className="navLink" to="/booking-page">Reservation</NavLink>
                    <NavLink className="navLink" to="/order-online">Order Online</NavLink>
                    <NavLink className="navLink" to="/login">Login</NavLink>
                </div>
            </nav>
        </>
    );
}

export default Nav;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar=(props)=>{
    const {href1, href2, href3, link1, link2, link3 }=props;

    return(
        <nav className="navbar navbar-light bg-light">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a className="nav-link" href={href1}>{link1}</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href={href2}>{link2}</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href={href3}>{link3}</a>
                    </li>
                </ul>
        </nav>
    )
}
export default Navbar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css';

const Footer=(props)=>{
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-12 justify-content-center">
                    <span className="text-muted">
                        &copy; 2021 <span className="highlight">Company, Inc</span>
                    </span>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
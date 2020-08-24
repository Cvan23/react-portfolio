import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3 offset-1 ml-3">
                        <ul className="list-unstyled">
                            <li><Link to='/story'>Our Story</Link></li>
                            <li><Link to='/cats'>Our Cats</Link></li>
                            <li><Link to='/partners'>Community Partners</Link></li>
                            <li><Link to='/adopt'>Adoption Stories</Link></li>
                            <li><Link to='/yummy'>Menu</Link></li>
                            <li><Link to='/store'>Shop</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 offset-1 mr-2">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a role="button" className="btn btn-link mr-5" href="tel:+15032828249"><i className="fa fa-phone fa-2x" /> 1-503-282-8249</a><br />
                        <a role="button" className="btn btn-link" href="mailto:coffeekitty@outlook.com"><i className="fa fa-envelope-o fa-2x" /> coffeekitty@outlook.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
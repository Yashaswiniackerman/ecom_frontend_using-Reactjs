import React, { Fragment } from 'react'
import { Link, useLocation } from "react-router-dom";
import { signout, isAuthenticated } from '../auth/helpers';




const Menu = ({ path }) => {
    let location = useLocation();

    const currentTab = (path) => {
        if (location.pathname === path) {
            return { color: "#2ecc72" };
        } else {
            return { color: "#FFFFFF" };
        }
    };
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className='nav-item'>
                    <Link style={currentTab("/")} className='nav-link' to="/">Home</Link>
                </li>


                <li className='nav-item'>
                    <Link style={currentTab("/cart")} className="nav-link" to="/cart">
                        Cart
                    </Link>
                </li>

                {isAuthenticated() && (<li className='nav-item'>
                    <Link style={currentTab("/userdashbard")} className="nav-link" to="/userdashbard">
                        dashboard
                    </Link>
                </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                        <li className='nav-item'>
                            <Link style={currentTab("/signup")} className="nav-link" to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link style={currentTab("/signin")} className="nav-link" to="/signin">
                                Signin
                            </Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className='nav-item'>
                        <Link style={currentTab("/")} className="nav-link text-warning" to="/">
                            Signout
                        </Link>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Menu;

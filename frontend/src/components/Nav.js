import React, { Component, Fragment } from 'react'

function Nav(props) {
        return (
            <nav className="nav">
                {!props.logged_in ? (
                <Fragment>
                    <li onClick={()=>props.display_form('login')}>Login</li>
                    <li onClick={()=>props.display_form('signup')}>Sign Up</li>
                </Fragment>) :
                (<li onClick={()=>props.handle_logout()}>Logout</li>)
                }
            </nav>
        )
}

export default Nav;
import React from 'react';


function Nav() { 
    return (
        <div className="flex container justify-between ">
            <div className="">
                <h1>ZG Photo</h1>
            </div>
            <div className="">
                <nav >
                <ul className="flex space-x-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Photos</li>
                </ul>
                </nav>
            </div>   
        </div>
    )
}

export default Nav;
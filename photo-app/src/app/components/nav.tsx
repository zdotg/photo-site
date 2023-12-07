import React from 'react';
import Link from 'next/link';
import GalleryNavBtn from './galleryNavBtn';


function Nav() { 
    return ( 
        <div className="flex container w-full justify-evenly">
                <div className="flex flex-wrap content-center">
                    <Link href='/'>Z.G.</Link>
                </div>
                <div className="flex flex-wrap content-center">
                    <GalleryNavBtn/>
                </div>
                <div className="flex flex-wrap content-center">
                    <Link href='/about'>About</Link>    
                </div>
        </div>
    )
}

export default Nav;
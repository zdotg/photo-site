'use client'
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


export default function GalleryNavBtn() { 
    
    const [dropdownOpen, setDropdownOpen] = useState(false);


  
    function toggleDropdown() {
      setDropdownOpen(!dropdownOpen);
    }
    return (
        <div>
            <nav className='flex-1 text-center py-0 '>
                <ul className="md:flex p-5 space-x-3 cursor-pointer">
                <li className="relative group">
                    <span onClick={toggleDropdown}>
                      Gallery
                      {/* Arrow icon that changes based on dropdown state */}
                      {dropdownOpen ? (
                       <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </span>
                      {/* Dropdown */}
                      <ul className={`absolute left-0 mt-2 w-48  border border-gray-300 rounded-md shadow-md ${dropdownOpen ? "block" : "hidden"}`}>
                        <li>
                          <Link href="/gallery/NYC">New York</Link>
                        </li>
                        <li>
                          <Link href="/gallery/AVL">Asheville</Link>
                        </li>
                      </ul>
                      </li>
                  </ul>
              </nav>
          </div>
      )
  }  
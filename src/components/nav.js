import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nabvarstyle.css"


export default function Nav() {
  return (
    <div className='outer_div'>
         <p>Agro<span className='fm'>Farms.</span></p>
        <div>
        <ul className='ul_list'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About Us</Link>
            </li><li>
                <Link    to={"/pricing"}>Products</Link>
            </li><li>
                <Link   to={"/contact"}>Choose Us</Link>
            </li><li>
                <Link   to={"/conatact"}>Team</Link>
            </li><li>
                <Link    to={"/pricing"}>Pricing</Link>
            </li><li>
                <Link   to={"/conatact"}>Contact</Link>
            </li>
        </ul></div>
        <button className='btn'>Buy our products</button>
    </div>
  )
}

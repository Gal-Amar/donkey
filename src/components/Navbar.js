import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <nav>
      <ul className="links">
        <li><Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'link active' : 'link'}>בית</Link></li>
        <li><Link to="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'link active' : 'link'} >אודות</Link></li>
        <li><Link to="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'link active' : 'link'} >דפי צביעה</Link></li>

      </ul>
      
    </nav>
  )
}

export default Navbar
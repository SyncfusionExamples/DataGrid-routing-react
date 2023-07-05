import {Link} from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div>
        <nav>
          <ul class="router-list">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;
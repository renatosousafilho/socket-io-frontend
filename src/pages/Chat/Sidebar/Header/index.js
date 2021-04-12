import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Avatar } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import socketClient from '../../../../utils/socketClient';

import './styles.scss';


function Header({user}) {
  const [openDropDown, setOpenDropDown] = useState(false);
  
  return (
    <header className="sidebar__header">
      {user.avatar 
        ? <img src={user.avatar} alt="avatar" className='body__profile-picture' />
        : <Avatar className="sidebar__avatar"/>
      }
      <div className="sidebar__options">  
        <IconButton onClick={() => setOpenDropDown(!openDropDown)}>
          <MoreVert className="options__item" />
          <div
            className="sidebar__dropdown"
            style={openDropDown ? { display: 'block' } : { display: 'none' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: '#585858' }}>
              <div className="sidebar__action">Log out</div>
            </Link>
          </div>
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
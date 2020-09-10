import React, { useContext, useState } from 'react';
import Router from 'next/router';
import {FaChevronDown} from 'react-icons/fa';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import Link from 'next/link'
import { FirebaseContext } from '../../../../firebase';



const TopbarProfile = () => {

  const { usuario, firebase} = useContext(FirebaseContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  try{

    if(usuario == null) {
       Router.push('/')
    }
    
  }catch(e){}
  
    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={handleToggle}>
          {/* <img className="topbar__avatar-img" src='./img/ava.png' alt="avatar" /> */}
          {usuario != null && <p className="topbar__avatar-name">{usuario.displayName} </p>}
          <FaChevronDown className="topbar__icon" />
        </button>
        {isOpen && <button type="button" className="topbar__back" onClick={handleToggle} />}
        <Collapse isOpen={isOpen} className="topbar__menu-wrap">
          <div className="topbar__menu">
            {/* <Link href="/" passHref><TopbarMenuLink title="Page one" icon="list"/></Link>
            <Link href="/dashboard" passHref><TopbarMenuLink title="Page two" icon="inbox"/></Link>
            <div className="topbar__menu-divider" /> */}
            <Link href="/" passHref> 
              <TopbarMenuLink title="Log Out" icon="exit" onClick={() => firebase.cerrarSesion() }/>
            </Link>
          </div>
        </Collapse>
      </div>
    );
  }

export default TopbarProfile
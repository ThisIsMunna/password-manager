import { NotFound } from 'http-errors';
import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import useFirebase from './hooks/useFirebase';

const Navbar = () => {
   const {user, logOut} = useFirebase();
   const displayName = user.displayName;
    return (
        <div className="flex">
           <Link to="/home"><button>Home</button></Link> 
           <Link to="/doctorsContacts"> <button>Doctors' Contacts</button></Link>
           <Link to="/specialDiscounts"> <button>Special Discount</button></Link>
           {user.email && <button onClick={() => {logOut()}}>logout</button>}
           {displayName ? <div>{displayName} </div> : <div>notfound</div> }

        </div>
   );
};

export default Navbar;
import React from 'react';
import Search from '../components/search';

import constants  from '../others/constants';
import {Link} from 'react-router-dom';


console.log('constants are', constants);


export default function Instagram(){
    
    return (
        <div>
            <h3>This is the default Instagram container</h3>
            <Search placeholder="Search inside instagram" />
            <a className="auth-btn" href={constants.instagram_auth_url} >Authentificate</a>
        </div>
    
    )
}
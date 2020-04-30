import React, {useEffect} from 'react';

import axios from 'axios';

import constants from '../../others/constants';

export default function Auth(props){
    // console.log('props are', props);
    const uriSearch = JSON.parse('{"' + decodeURI(props.location.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    ;
    console.log({uriSearch})

    const code = uriSearch.code;
    
    useEffect(() => {
        
        
        return false;
        axios({
            url: "https://api.instagram.com/oauth/access_token",
            method:"POST",
            data:{
                client_id: constants.instagram_app_id,
                client_secret: constants.instagram_app_secret,
                grant_type:"authorization_code",
                redirect_uri: constants.app_url + '/auth',
                code: code
            }
        }).then(response => {
            console.log('instagram request finished')
        }).catch(error => {
            console.log('instagram problem ', error);
        })

    })


    return <div>
        <h3>This is the insta auth page</h3>
        <p>The authorization code is: {code}</p>
        
    </div>
}
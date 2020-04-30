import React, {useState} from 'react';

import {Switch, Route} from 'react-router';
import Choose from './components/choosePlatform';

import Facebook from './containers/Facebook';
import Instagram from './containers/Instagram';
import InstagramAuth from './components/instagram/auth';

export default function Main(){
    const [platform, setPlatform] = useState('');
    

    return (
       <div>
           <Switch>
                <Route path="/facebook" component={Facebook} />
                <Route path="/instagram" component={Instagram} />
                <Route path='/auth' component={InstagramAuth} />
                <Route path="/" component={Choose} />
           </Switch>
           {/* <Choose allPlatforms={allPlatforms} setPlatform={setPlatform} platform={platform} /> */}
       </div>
    )
}
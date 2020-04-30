import React from 'react';

import {Link, withRouter} from 'react-router-dom';

function Choose({setPlatform}){
    const allPlatforms = ['facebook', 'instagram', 'youtube', 'linkedin']

    return (
        <div>
            Choose a platform: 
            <div className="platforms-wrapper">
                {allPlatforms.map(platform => {
                    return <Link to={`/${platform}`}><div className="single-platform-btn" >{platform}</div></Link>
                })}
            </div>
        </div>
    )
}

export default withRouter(Choose);
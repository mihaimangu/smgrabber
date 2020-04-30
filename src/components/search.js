import React from 'react';

export default function Search({placeholder}){

    return (
        <div className="social-media-search-wrapper">
            <input className="social-media-general-search" type="text" placeholder={placeholder} />
            <input className="social-media-search-btn" type="button" value="search" />
        </div>
        
    )
}

Search.defaultProps = {
    placeholder: "Search something",
}
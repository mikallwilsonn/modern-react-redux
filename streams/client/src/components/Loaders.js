import React from 'react';

const SmallLoader = () => {
    return <div className="ui active centered inline loader"></div>;
}

const FullLoader = () => {
    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading...</div>
            </div>
            <p></p>
        </div>
    );
}

export { SmallLoader, FullLoader };

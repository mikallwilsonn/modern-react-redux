import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const App = () => {

    const [lat, errorMessage] = useLocation();

    const renderContent = () => {
        if ( errorMessage && !lat  ) {
            return <div>Error: {errorMessage}</div>;
        } else if ( !errorMessage && lat ) {
            return <SeasonDisplay lat={lat} />;
        } else {
            return <Spinner message="Please accept location request." />;
        }
    }


    return(
        <div className="border red">
            {renderContent()}
        </div>
    );


}


ReactDOM.render(
    <App />,
    document.querySelector( "#root" )
);

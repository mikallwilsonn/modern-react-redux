import React from 'react';
import ReactDOM from 'react-dom';
import { FullLoader } from './Loaders';

const Modal = ( props ) => {
    if ( !props.title || !props.content || !props.actions ) {
        return (
            <div 
                className="ui dimmer modals visible active" 
                onClick={props.onDismiss}
            >
                <FullLoader />
            </div>,
            document.querySelector( '#modal' )
        );
    }

    return ReactDOM.createPortal(
        <div 
            className="ui dimmer modals visible active" 
            onClick={props.onDismiss}
        >
            <div 
                onClick={( event ) => event.stopPropagation()} 
                className="ui standard modal visible active"
            >
                <div className="header">
                    <h3>{props.title}</h3>
                </div>
                <div className="content">
                    <p>{props.content}</p>
                </div>
                <div className="actions">
                    {props.actions}
                </div>

            </div>
        </div>,
        document.querySelector( '#modal' )
    );
}

export default Modal;
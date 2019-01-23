import React from 'react';

const Image = ( props ) => {
    return (
        <div className="ui card">
            <a className="image" href={props.image.urls.full}>
                <img 
                    src={props.image.urls.regular} 
                    className="visible content" 
                    alt={props.image.description} 
                />
            </a>
            <div className="content">
                <a 
                    className="header" 
                    href={props.image.urls.full} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textTransform: 'capitalize' }}
                >
                        {props.image.description}
                </a>
                <div className="meta">
                    <span>
                        <i className="thumbs up icon"></i>
                        {props.image.likes} likes
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Image;
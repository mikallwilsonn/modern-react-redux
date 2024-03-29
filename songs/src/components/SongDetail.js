import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
    if ( !song ) {
        return <div>Select a Song</div>;
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                <strong>Title:</strong> {song.song.title} <br/>
                <strong>Duration:</strong> {song.song.duration}
            </p>
            
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return { song: state.selectedSong };
}


export default connect( mapStateToProps )( SongDetail );
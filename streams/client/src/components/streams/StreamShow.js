import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { FullLoader } from '../Loaders';

class StreamShow extends Component {
    constructor( props ) {
        super( props );

        this.videoRef = React.createRef();
    }


    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);
        this.buildPlayer();
    }


    componentDidUpdate() {
        this.buildPlayer();
    }
    
    
    componentWillUnmount() {
        this.player.destroy();
    }

    
    buildPlayer() {
        if ( this.player || !this.props.stream ) {
            return;
        }

        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement( this.videoRef.current );
        this.player.load();
    }


    render() {

        const stream = this.props.stream;

        if ( !stream ) {
            return <FullLoader />
        }

        return (

            <div>
                <video 
                    ref={this.videoRef} 
                    style={{ width: '100%' }}
                    controls
                />
                <h1>{stream.title}</h1>
                <p>{stream.description}</p>
            </div>
        );
    }
}


const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.stream[ownProps.match.params.id] }
}


export default connect( mapStateToProps, { fetchStream })( StreamShow );

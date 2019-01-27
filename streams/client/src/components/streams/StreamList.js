import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }


    renderAdmin( stream ) {
        if ( stream.user_id === this.props.current_user_id ) {
            return (
                <div className="right floated content">
                    <Link 
                        className="ui inverted button primary" 
                        to={`/streams/edit/${stream.id}`}>
                            EDIT
                    </Link>
                    <Link 
                        className="ui inverted button red"
                        to={`/streams/delete/${stream.id}`}>
                            DELETE
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map( stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle align icon video"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">
                            <p>{stream.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if ( this.props.isSignedIn ) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create New Stream</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Currently Live Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div> 
        );
    }
}

const mapStateToProps = ( state ) => {
    return { 
        streams: Object.values( state.stream ),
        current_user_id: state.auth.user_id,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect( mapStateToProps, { fetchStreams })( StreamList );

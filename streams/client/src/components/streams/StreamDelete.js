import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream( this.props.match.params.id );
    }

    renderActions() {
        const { id } = this.props.match.params;
        return(
            <Fragment>
                <button 
                    onClick={() => this.props.deleteStream( id )}
                    className="ui button negative">
                    Delete
                </button>
                <button 
                    onClick={() => history.push( "/" )}
                    className="ui button"
                >Cancel</button>
            </Fragment>
        );
    };

    renderContent() {
        if ( !this.props.stream ) {
            return 'Are you sure you want to delete this stream?'
        } else {
            return `Are you sure you want to delete the stream titled: ${this.props.stream.title}?`;
        }
    }


    render() {
        return (
            <Modal 
                title="Delete Stream" 
                content={this.renderContent()} 
                actions={this.renderActions()}
                onDismiss={() => history.push( "/" )}
            />
        );
    }
}


const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.stream[ownProps.match.params.id] }
}


export default connect( 
    mapStateToProps, 
    { fetchStream, deleteStream })( StreamDelete );

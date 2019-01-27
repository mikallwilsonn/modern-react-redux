import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { FullLoader } from '../Loaders';

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream( this.props.match.params.id );
    }

    onSubmit = ( formValues ) => {
        this.props.editStream( this.props.match.params.id, formValues );
    }

    render() {
        if ( !this.props.stream ) {
            return <FullLoader />;
        }

        return (
            <div>
                <h3>Edit: <strong>{this.props.stream.title}</strong></h3>
                <StreamForm 
                    initialValues={_.pick( this.props.stream, 'title', 'description')} 
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }

}


const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.stream[ownProps.match.params.id] }
}

export default connect( mapStateToProps, { fetchStream, editStream } )( StreamEdit );

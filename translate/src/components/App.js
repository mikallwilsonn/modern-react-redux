import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class App extends Component {

    state = {
        language: 'english',
        color: 'primary'
    }

    onLanguageChange = ( language, color ) => {
        this.setState({ language, color })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select A Language: 
                    <i 
                        className="flag us" 
                        onClick={() => this.onLanguageChange('english', 'primary')}
                    ></i>
                    <i 
                        className="flag nl"
                        onClick={() => this.onLanguageChange('dutch', 'red')}
                    ></i>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}


export default App;
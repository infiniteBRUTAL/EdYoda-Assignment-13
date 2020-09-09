import React from 'react';
import {Route , BrowserRouter} from "react-router-dom";
import './App.css';

import PlayerSection from './PlayerSection/PlayerSection'
import PlaylistSection from './PlaylistSection/PlaylistSection'

class App extends React.Component {

    state = {
        id: 1,
    }

    changeId = (videoId) => {
        this.setState({id : videoId})
    }

    render() {
    return(
        <BrowserRouter>
            {/*<div className='App'>*/}
            {/*    <div className='left'>*/}
                    <Route path={"/:vid"} render={(props) => <PlayerSection {...props}/>}/>
                {/*</div>*/}
                {/*<div className='right'>*/}
                    <Route path={"/:vid"} render={(props) => <PlaylistSection parentState={this.changeId} {...props}/>}/>
            {/*    </div>*/}
            {/*</div>*/}
        </BrowserRouter>
    )}
}

export default App;

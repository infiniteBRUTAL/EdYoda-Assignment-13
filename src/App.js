import React from 'react';
import { Route , BrowserRouter } from "react-router-dom";
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
            <h1 className='Title'>The Video Player</h1>
            <div className='App'>
                <div className='left'>
                    <Route path={"/:vid"} render={(props) => {
                        return <PlayerSection currentId={this.state.id} {...props}/>}}/>
                </div>
                <div className='right'>
                    <Route path={`/`} render={(props) => <PlaylistSection parentState={this.changeId} {...props}/>} videoId={this.state.id}/>
                </div>
            </div>
        </BrowserRouter>
    )}
}

export default App;

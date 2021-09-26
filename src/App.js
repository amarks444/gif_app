import React from 'react';
import Tag from './components/Tag_V2';
import Random from './components/Random_V2';

import './App.css';
const App = () => {
    return (
        <div>
            <h1>Random GIF Application</h1>
            <div className="main-container">
                <Random />
                <Tag />
            </div>

        </div>
    )
}

export default App;



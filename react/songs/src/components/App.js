import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div className="ui items">
                        <SongList />
                     </div>
                </div>
                <div className="column eight wide">
                    <div className="ui items">
                        <SongDetail />
                     </div>
                </div>
            </div>
        </div>
    )
}

export default App;


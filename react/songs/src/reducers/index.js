import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title : 'pehla nasha', duration: 4.05},
        { title : 'meri mehbooba', duration: 3.21},
        { title : 'chaiyya chaiyya', duration: 2.15},
        { title : 'Nazar ke samne', duration: 1.10}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});


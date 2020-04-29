import React from 'react';
import  './DragAndDrop.css';


class DragAndDrop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            borderColor : '#ccc'
        }
    }


    onHighlight= (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            borderColor: 'purple'
        });
    }
      
    onUnHighlight = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            borderColor: '#ccc'
        });
    }

    render(){
        return (

                    <div id="drop-area" 
                        onDragEnter = { this.onHighlight } 
                        onDragOver = { this.onHighlight } 
                        onDragLeave = { this.onUnHighlight } 
                        onDrop = { this.onUnHighlight } 
                       

                        style={{ borderColor: this.state.borderColor }}
                    >
                        <form className="my-form">
                            <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                            <input type="file" id="fileElem" multiple accept="image/*"  />
                            <label className="button" htmlFor="fileElem">Select some files</label>
                        </form>
                        <div id="gallery"></div>
                    </div>
                );
    }
}

export default DragAndDrop;
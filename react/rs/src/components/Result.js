import React from 'react';

class Results extends React.Component {

    onResultsClick = (e) => {
        e.preventDefault();
        console.log(e.target.children.length, e.target.children)
        console.log(e.target.length, e.target)
        let text =  e.target.length  === undefined && e.target.children.length !== 0? e.target.children[0].innerText : e.target.innerText;
        this.props.onSelectClicked(text);
    }

    renderResults = (results) => {
        return results.data.map((prop, i)=>{
                    return (
                        <div className="item" key = {i} onClick={this.onResultsClick }>
                            <div className="content">
                                <div className="header" id="header" >{prop}</div>
                                this is sample description
                            </div>
                        </div>
                    )
                });
    }    
    render = () => {
        if(this.props.data !== undefined && this.props.data.length > 0){
            return (
                <div>
                    <div className="ui inverted segment middle aligned selection list">
                    { this.renderResults(this.props)}
                    </div>
                </div>
            );
        }else{
            return  ( <div>
                <p>No Recommendation !</p>
            </div>);
        }
    }
}


export default Results;
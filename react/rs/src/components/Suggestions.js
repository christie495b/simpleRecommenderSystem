import React from 'react';

class Suggestion extends React.Component{

    state = { 
        className: ''
     };
    
    
    onSuggestionClick = (e) => {
        e.preventDefault();
        this.props.onSelectClicked(e.currentTarget.innerText);
        // console.log('The link was clicked.', );

    }

    static getDerivedStateFromProps(props, state) {
        if(props.data.length > 0 & state.className !== ' visible'){
            return {
                className: ' visible'
            };
        }

        if(props.data.length === 0 & state.className !== ''){
            return {
                className: ''
            };
        }

        return { 
            className: ''
         };
    }

    renderSuggestions = (results) => {
        
        return results.map((prop, i)=>{
                return (

                       <span className="result" key = {i} onClick={this.onSuggestionClick} >
                            <div className="content" >
                                <div className="title">{prop}</div>
                            </div>
                       </span>
                    
                )
        });
    }

    render = () => {
        
        let className = 'results transition';
        
        


        return (
            <div className={className + this.state.className}>
                    {this.renderSuggestions(this.props.data)}
            </div>
        );
    }
}

export default Suggestion;
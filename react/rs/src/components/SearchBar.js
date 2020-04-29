import React from 'react';

import Suggestion from './Suggestions';
import { debounce } from 'lodash';

class SearchBar extends React.Component {


     constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
   
        
    //    this.onInputChangeThrottled = debounce(this.onInputChange, 500)
    }

    
    
    onInputChange = (event) => {
        // console.log(event.currentTarget)
        this.setState({ term : event.currentTarget.value })
        this.props.onInputChange(this.state.term);
        
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: make sure callback
        // from parent component 
        this.props.onFormSubmit(this.state.term);
    }

    onSelectClicked = (term) => {
        this.props.onSelectClicked(term);
    }

    render(){
        return (
                    <div className=" search ui">
                        <form className="ui form" onSubmit={this.onFormSubmit} >
                            <div className=" focus field">
                                <label>Movie Search</label>
                                <input 
                                    type="text" 
                                    value={ this.state.term } 
                                    onChange={this.onInputChange}
                                />
                                
                                
                            </div>
                        </form>
                        <Suggestion data={this.props.suggestions} onSelectClicked={this.onSelectClicked} />
                    </div>
                );
    }
}

export default SearchBar;
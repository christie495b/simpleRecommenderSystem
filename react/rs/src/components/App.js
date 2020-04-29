import React from 'react';

import SearchBar from './SearchBar';
import Result from './Result';
import movies from '../apis/movies';

import './App.css';

class App extends React.Component{
   state = { movies: [], suggestions: [], title: ''};

   componentDidMount = async () => {
      const response = await movies.post('/');
      this.setState({
         movies : response.data
      })
   }

   onInputChange = async (term) => {
      let data, response;
      if(term !== ''){
         response = await movies.post('/search/movies/',{ qs: term, row: 'title' });
         data = response.data;
      }else{
         data = []
      }

      this.setState({
            suggestions : data,
            title: term
      });
   };



   onTermSubmit = async (term) => {
      const response = await movies.post('/');
      this.setState({
         movies : response.data,
         title: term
      })
         
   };

   onSelectClicked = async (term) => {
      const response = await movies.post('/search/movies/',{ qs: term, row: 'recommendation'});
      this.setState({
         movies : eval(response.data[0]),
         suggestions : [],
         title: term
      })
     
   }



   render(){
    return (
            <div className="ui container">
                    <h2 className="ui header example">
                        Movie Recommender System
                        <div className="sub header">Please search or select a movie from below.</div>
                   </h2>

                   <div className="ui inverted segment">
                     <h4 className="ui grey inverted header">{this.state.title}</h4>
                  </div>

                   
                  <div className="html ui top attached segment">
                        <SearchBar 
                              onFormSubmit={this.onTermSubmit} 
                              onInputChange={this.onInputChange} 
                              onSelectClicked={this.onSelectClicked}
                              suggestions={this.state.suggestions}
                              value = {this.state.title}
                              />
                  </div>
                  <div className="annotation transition visible">
                     <div className="ui instructive bottom attached">
                        <Result data={this.state.movies} onSelectClicked={this.onSelectClicked}></Result>
                     </div>
                  </div>
             </div>     
        );
   }
}

export default App;
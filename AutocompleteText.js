import React, { Component } from 'react';
import './AutocompleteText.css';
import './countries';

class AutocompleteText extends Component {
    constructor (props){
       super(props);

       this.state = {
        suggestions: [],
        text: '',
    };
    };

    onTextChange = (e) => {
        const {country} = this.props;
       const value = e.target.value;
       let suggestions = [];
       if(value.length > 0) {
           const regex = new RegExp(`^${value}`, 'i');
           suggestions = country.sort().filter(v => regex.test(v));
       }
       this.setState(()=>({ suggestions, text: value }));
    }
    
    suggestionSelected (value) {
        this.setState({
            text: value,
          suggestions: [],
        })
    }

       renderSuggestions () {
           const { suggestions } = this.state;
           if (suggestions.length === 0){
               return null;
           }
           return (
            <ul>
            {
                suggestions.map((country)=><li onClick={()=>this.suggestionSelected(country)}>{country}</li>)
            }
        </ul>
           );
       }

    render(){
        const {text} = this.state;
        return (
            <div className="AutocompleteText">
                <input value={text} onChange={this.onTextChange} type='text' />
                <ul>
                    {
                        this.renderSuggestions()
                    }
                </ul>
            </div>
        )
    }
}

export default AutocompleteText;
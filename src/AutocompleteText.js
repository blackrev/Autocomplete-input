import React, { Component } from 'react';

class AutocompleteText extends Component {
    state = {
        countries: [
            'Nigeria',
            'Ghana',
            'Liberia',
            'Togo',
            'Benin',
            'chad'
        ],

        suggestions: [],
        text: '',
    };

    onTextChange = (e) => {
       const value = e.target.value;
       let suggestions = [];
       if(value.length > 0) {
           const regex = new RegExp(`^${value}`, 'i');
           suggestions = this.state.countries.sort().filter(v => regex.test(v));
       }
       this.setState(()=>({ suggestions, text: value }));
    }
    
       renderSuggestions () {
           const { suggestions } = this.state;
           if (suggestions.length === 0){
               return null;
           }
           return (
            <ul>
            {
                suggestions.map((country)=><li>{country}</li>)
            }
        </ul>
           );
       }

    render(){
        const {text} = this.state;
        return (
            <div>
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
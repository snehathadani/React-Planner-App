import React from 'react';
import Task from '../Tasks/Task';


const SearchBar = (props) => {
        return (
            <div> 
            <input 
                placeholder= 'Enter Search Term Here'
                value= {props.search}
                onChange= {props.onSearchChange}/>
            </div>
        );
    };


export default SearchBar;
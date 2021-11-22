import React, { createContext } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchContext = createContext();

export const SearchProvider = (props) => {
    const [search, setSearch] = useState();
    
    return (
        <SearchContext.Provider value={search}>
            <div>
                <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand">React NewsAPI</a>
                    <form class="d-flex">
                    <input class="form-control me-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" value={search} onInput={e => setSearch(e.target.value)}/>
                    </form>
                </div>
                </nav>
            </div>
        </SearchContext.Provider>
    );
}
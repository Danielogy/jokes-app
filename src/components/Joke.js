import React, { useState } from 'react';
import "./Joke.css";
import Filter from "./Filter";

// Joke Component
const Joke = () => {

    // states
    const [displayJoke, setDisplayJoke] = useState(false);
    const [joke, setJoke] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [displaySearchComponent, setSearchComponent] = useState(false);

    // api parameters
    const [language, setLanguage] = useState("");
    const [categories, setCategories] = useState(
        [
            'Programming',
            'Miscellaneous',
            'Dark',
            'Pun',
            'Spooky',
            'Christmas'
        ]
    );
    const [params, setParams] = useState([]);
    
    // did the user specify parameters? 
    const [hasParams, setHasParams] = useState("");
    const [concat, setConcat] = useState("");

    // display filter component
    const displaySearch = () => {setSearchComponent(true); setDisplayJoke(false)};

    let api = "https://v2.jokeapi.dev/joke/";
    const fetchJokes = async () =>{
        setLoading(true);
        setDisplayJoke(true);

        const response = await fetch(api + categories.join(',') + "?" + language + hasParams + 
                    params.join(',').toLowerCase() + concat + "type=twopart", 
                    { 
                        headers : {'Content-type' : 'application/json; charset=UTF-8'}
                    });

        const data = await response.json();

        if(response.ok)
            setJoke(data);

        setLoading(false);
        
        return response;
    }

    return (
        <div>
            <div className="buttons">
                <button id="getJoke" disabled={displaySearchComponent} onClick={fetchJokes}>Get Random Joke</button>
                <button id="searchJoke" disabled={displaySearchComponent} onClick={displaySearch}></button>
            </div>

            {displaySearchComponent &&
                <Filter
                    setSearchComponent={setSearchComponent}
                    setCategories={setCategories}
                    setHasParams={setHasParams}
                    setParams={setParams}
                    params={params}
                    categories={categories}
                    setLanguage={setLanguage}
                    language={language}
                    setConcat={setConcat}
                />
            }

            {displayJoke &&
                <div className="joke-container">

                    <div className="credits">
                        <h6>Jokes provided by
                            <a
                                rel="noreferrer"
                                href="https://jokeapi.dev"
                                target="_blank"
                            > JokeAPI
                            </a>
                        </h6>
                    </div>

                    {!isLoading ? 
                        <div className="joke">
                            <div className="setup">
                                <h1>{joke.additionalInfo}</h1>
                                <h1>{joke.setup}</h1>
                            </div>

                            <div className="delivery">
                                <h1>{joke.delivery}</h1>
                            </div>
                        </div>

                        :
                        
                        
                        <h1 className="loading">Fetching Joke...</h1>
                    }    
                </div>  
            }
        </div>
    );

   
};

export default Joke;
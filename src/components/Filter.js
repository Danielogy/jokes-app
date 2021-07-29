import React, { useEffect, useState } from 'react';
import "./Filter.css";

const Filter = ({ setSearchComponent, setCategories, setParams, 
                setHasParams, setLanguage, language, params, 
                setConcat, categories }) => {

    // hide filter component
    const handleSearchComponent = () => setSearchComponent(false);

    // keep track of how many categories are currently active. If 0, render
    // visual error. (See pillListener function --line 30--)
    let [hasCategories, setHasCategories] = useState(categories.length);

    // listen to what filters the user clicks.
    const pillListener = () =>{
        const pills = document.querySelectorAll('.pill');
        const pillsFlag = document.querySelectorAll('.pill-flag');

        pillsFlag.forEach(p =>{
            p.addEventListener('click', () =>{
                p.classList.toggle('active');
            })
        });

        pills.forEach(p => {
            p.addEventListener('click', () => {
                p.classList.toggle('active');

                // set num of categories active.. if zero render error message
                if (!p.classList.contains('active'))
                    setHasCategories(--hasCategories);
                else
                    setHasCategories(++hasCategories);

                // handle user error based on categories selected. 
                const container = document.querySelector('.filter-container');
                if(hasCategories === 0)
                    container.style.cssText = "border: solid salmon 2px;";
                else
                    container.style.cssText = "border: solid #c6c6c685 2px;";
                
            });
        });
    }

    
    // add class 'active' to pills based on what filters are currently 
    // activated. 
    const fillPills = () =>{

        const pills = document.querySelectorAll('.pill');
        const pillsFlag = document.querySelectorAll('.pill-flag');
        const lang = document.querySelectorAll('#languages option');

        // category buttons
        pills.forEach(p =>{
            categories.map(c => {
                if(p.textContent === c)
                    p.classList.add('active');
        
                return '';
            });
        });

        // parameters buttons
        pillsFlag.forEach(p =>{
            params.map(c =>{
                if(p.textContent === c)
                    p.classList.add('active')

                return ''; 
            });
        });


        lang.forEach(l => {
            if (l.value === language.substring(5, 7)){
                l.outerHTML = `<option value="${l.value}" selected>${l.textContent}</option>`;
            }
        });
    }   

    const apiParameters = () =>{

        // hold api parameter data
        let categories = [];
        let parameters = [];
        let language = document.querySelector('#languages').value;
        
        // get all individual pill buttons
        const pills = document.querySelectorAll('.pill.active');
        const pillsFlag = document.querySelectorAll('.pill-flag.active');

        // add whatever buttons are active to the array for fetching.
        pills.forEach(p => categories.push(p.textContent));
        pillsFlag.forEach((p) => parameters.push(p.textContent));

        // set parent's states based on user input filter. 
        setCategories(categories);

        // if the user specified blacklist parameters, add them to API call.
        if(parameters.length > 0){
            setHasParams("blacklistFlags=");
            setParams(parameters);
            setConcat("&");
        }
        // otherwise pass an empty string
        else{
            setHasParams("");
            setParams([]);
            setConcat("");
        }

        // did user specify a language -- pass it if yes 
        if(language !== "")
            setLanguage("lang=" + language + "&");
        // otherwise set an empty string to the API call.
        else   
            setLanguage("");
    }

    useEffect(() =>{
        // set up pill button click event listeners
        pillListener();

        // fill pill buttons based on current filter options.
        fillPills();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="filter-container">
                <div className="close" onClick={handleSearchComponent}> x </div>
                <div className="filters">

                    <h6>Language</h6>
                    <select name="languages" id="languages">
                        <option value="">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="pt">Portuguese</option>
                        <option value="de">German</option>
                        <option value="cs">Czech</option>
                    </select>


                    <h6>Categories</h6>
                    <div className="categories">    
                        <button className="pill">Programming</button>
                        <button className="pill">Miscellaneous</button>
                        <button className="pill">Dark</button>
                        <button className="pill">Pun</button>
                        <button className="pill">Spooky</button>
                        <button className="pill">Christmas</button>
                    </div>

                    {(hasCategories === 0) &&
                        <h6 className="error-message">You must select at least one category.</h6>
                    }

                    <h6>Flags [To Blacklist]</h6>
                    <div className="flags">
                        <button className="pill-flag">NSFW</button>
                        <button className="pill-flag">Religious</button>
                        <button className="pill-flag">Political</button>
                        <button className="pill-flag">Racist</button>
                        <button className="pill-flag">Sexist</button>
                        <button className="pill-flag">Explicit</button>
                    </div>

                    <button id="getFilteredJoke" disabled={hasCategories === 0} onClick={() => 
                                                                                    { if(hasCategories > 0 ) {
                                                                                    apiParameters(); 
                                                                                    handleSearchComponent();
                                                                                    } 
                                                                                }}>Save Filter</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
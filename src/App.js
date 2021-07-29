import React from "react";
import './App.css';

import Joke from './components/Joke';

function App() {
  return(
        <div className="app-header">
          <h6 className="disclaimer">Disclaimer: Retrieving random jokes may contain offensive/NSFW content. Use the search button to filter out content.</h6>
          <Joke/>
        </div>
  )
}

export default App;

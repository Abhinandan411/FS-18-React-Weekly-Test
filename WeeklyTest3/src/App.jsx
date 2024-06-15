import React, { useState } from 'react';

const ImageSearch = () => {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);
  const clientId = '23ZwDmFYhvnHklZi0Y4jEHyqUlxOo3U5CrJC_iqmqak';

  async function getDataFromAPI() {
    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${clientId}&query=${userInput}`);
    const data = await response.json();
    setResults(data.results);
  }

  function handleSearch() {
    getDataFromAPI();
  }

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center", }}>
        <h1 style={{fontFamily:"arial", marginTop:"1rem", marginBottom:"1rem"}}>Image Gallery</h1>
        <p style={{fontFamily:"arial", marginTop:"1rem", marginBottom:"1rem"}} >Search images here</p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
      
      <div className="image-container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {results.map((result) => (
          <div key={result.id} className="image-item" style={{ width: "30%", height: "400px", overflow: "hidden" }}>
            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={result.urls.small} alt={result.alt_description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSearch;

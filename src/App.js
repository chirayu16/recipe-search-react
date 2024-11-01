import axios from "axios";
import React, { useState} from "react";
import "./styles.css";
import SearchBar from "./components/searchBar";
import RecipeList from "./components/recipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = async (query) => {
    setLoading(true);
    try {
      
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`);

      setRecipes(response.data.hits);
    }
    catch(error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={getRecipes} />
      { loading ? <p>Loading ...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
};

export default App;
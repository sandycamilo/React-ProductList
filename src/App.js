import './App.css';
import CategoryButton from './CategoryButton.js';
import SingleProduct from './SingleProduct.js';
import { useState } from 'react';

function App() {
  const [ category, setCategory ] = useState('all')

  return (
    <div className="App"> 
      <div className="title">
        <h1>Cheaply</h1>
      </div>
    <CategoryButton className= "categoryButton" setCategory = { (name) => {
      setCategory(name)
    }}/>
    <SingleProduct className= "singleProduct" category= {category}/>
    </div>
  );
}

export default App;

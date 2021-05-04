import { uniqueCategories } from './data';
import './CategoryButton.css';

uniqueCategories.push('all')
 
function CategoryButton(props) {
  const { setCategory, selectedCategory } = props
  // console.log(selectedCategory)
  return (
    uniqueCategories.map((category) => {
      return (
      <button 
      className= {category === selectedCategory ? "selectedCategory": ""}
      onClick={() => setCategory(category)}>
        {category}</button>
      ) 
    })   
  );
}

export default CategoryButton;


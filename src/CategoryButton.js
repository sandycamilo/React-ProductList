import { uniqueCategories } from './data';
import './CategoryButton.css';

uniqueCategories.push('All')
 
function CategoryButton(props) {
  const { setCategory } = props
  return (
    uniqueCategories.map((category) => {
      return (
      <button onClick={() => setCategory(category)}>
        {category}</button>
      ) 
    })   
  );
}

export default CategoryButton;


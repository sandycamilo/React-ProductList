import { uniqueCategories } from './data';
import './CategoryButton.css';

function CategoryButton() {
  return (
    uniqueCategories.map((category) => {
      return <button>{category}</button>
    })   
  );
}

export default CategoryButton;


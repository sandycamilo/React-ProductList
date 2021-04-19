import data, {   
  allCategories,
  uniqueCategories,
  categoriesWithCounts,
  arrayWithCounts 
} from './data'

function CategoryButton() {
  return (
    uniqueCategories.map((category) => {
      return <button>{category}</button>
    })   
  );
}

export default CategoryButton;


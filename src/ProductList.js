import data from './data';
import './ProductList.css';

function ProductList() {
  return (
      data.map((props) => {
        return (
          <div className="Product">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.category}</p>
          </div>
        )
      })   
    );
  }
    
export default ProductList;

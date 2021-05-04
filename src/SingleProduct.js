import data from './data';
import './SingleProduct.css';

function SingleProduct(props) {
  const {category} = props
  return (
    <div className="productWrap">
    {data.filter((item) => {
      // if name matches 
      if (category === item.category || category === 'all') {
        return true
      } 
      return false
    }).map((props) => {
        return (
          <div className="Product">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>{props.price}</h3>
          </div>
      )}  
  )}</div>) 
}

    
export default SingleProduct;

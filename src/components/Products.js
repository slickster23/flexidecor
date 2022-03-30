import React, {useState, useEffect} from 'react'
import Commerce from '@chec/commerce.js';
import './Product.css'

// Create a Commerce instance
const commerce = new Commerce('pk_41711d925651a11bfd85ead669173b1d5a9ae0f647e90', true);


function Products() {

    const [product, setProduct] = useState([]);

    // Fetches data from the Chec API to the "product" variable
    useEffect(() => {
      commerce.products.list().then(result => {
        setProduct(result.data.map(product => product));
      });
    }, []);
  
    console.log('Commerce Product: ', product);
    
  return (
    <div id = "products">
        <h2>Products</h2>
        <div className="line"></div>

        <div className="product-container">
            {product.map((product, index) => (
                <div key = {index} className="product">
                <div className="product-image">
                    <img src={product.image.url} alt={product.name} className="img" />
                </div>

                <div className="product-detail">
                    <h2 className="product-name">{product.name}</h2>
                    <a href="#" className="button">Enquire</a>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewAllProduct() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();


  useEffect(() => {
    const GetData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3001/product");
        setProduct(response.data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };

    GetData();
  }, []);

  const handleEdit = (item) => {
    Navigate("/update",{ state: item });
  };
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://127.0.0.1:3001/delete-id/${id}`);
        const updatedProducts = product.filter((product) => product.id !== id);
        setProduct(updatedProducts);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="admin-product-panel">
      <h1 style={{ color: "#0077b6", fontStyle: 'italic' }}>All Products..</h1>
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product !== null ? (
        <div className="product-list">
          {product.map((item) => (
            <div key={item._id} className="product-card">
              <img src={item.imgurl} alt={item.name} />
              <div className="product-details">
                <p>
                  <p id='name'>{item.name}</p>
                  Seller: {item.saller} | Price: {item.price}
                  <p>Category: {item.catagory}</p>
                </p>
                <div className="product-actions">
                  <button className='add-button' onClick={() => handleEdit(item)}>Edit</button>
                  <button className='add-button' onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Not item to show...</p>
      )
      }
    </div>
  )
}

export default ViewAllProduct

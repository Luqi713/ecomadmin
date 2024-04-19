import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [seller, setSeller] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      imgUrl,
      seller,
      price,
      description,
      category
    });
  };

  return (
    <div className="product-form-container">
      <h2 style={{color:"#FFF"}}>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="input-field"
        />
        <br />

        <label htmlFor="imgUrl">Image URL:</label>
        <input
          type="text"
          id="imgUrl"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className="input-field"
        />
        <br />

        <label htmlFor="seller">Seller:</label>
        <input
          type="text"
          id="seller"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
          className="input-field"
        />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        ></textarea>
        <br />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        />
        <br />

        <button type="submit" className="add-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
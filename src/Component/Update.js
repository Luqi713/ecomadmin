import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateItem() {
    const data = useParams();
    const [productName, setProductName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [seller, setSeller] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [catagory, setCatagory] = useState('');
    console.log(data);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!productName || !imgUrl || !seller || !description || !price || !catagory) {
            alert('Please fill all fields.');
            return;
        }
        const productData = {
            name: productName,
            imgurl: imgUrl,
            saller: seller,
            price: price,
            desc: description,
            catagory: catagory,
        };
        try {
            const response = await axios.post("http://localhost:3001/update", productData);
            console.log('POST request successful:', response);
            setProductName('');
            setImgUrl('');
            setSeller('');
            setDescription('');
            setPrice('');
            setCatagory('');
        } catch (error) {
            console.error('POST request error:', error);
        }
    };

    return (
        <div className="product-form-container">
            <h2 style={{ color: "#FFF" }}>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    className="input-field"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <label htmlFor="imgUrl">Image URL:</label>
                <input
                    type="url"
                    id="imgUrl"
                    className="input-field"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    required
                />
                <label htmlFor="seller">Seller:</label>
                <input
                    type="text"
                    id="seller"
                    className="input-field"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    required
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    className="input-field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    className="input-field"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label htmlFor="catagory">Catagory:</label>
                <input
                    className="input-field"
                    id="catagory"
                    value={catagory}
                    onChange={(e) => setCatagory(e.target.value)}
                    required
                />
                <button type="submit" className="add-button">Add Product</button>
            </form>
        </div>
    )
}

export default UpdateItem
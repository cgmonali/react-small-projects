import React, { useState } from 'react';

function InputForm({ selectedOption, onDataSubmit }) {
  const [inputData, setInputData] = useState({
    ProductId: '',
    SellingPrice: '',
    ProductName: '',
  });

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [field]: value }));
  };

  const handleEnterPress = (event) => {
  
  };

  const handleDataSubmit = () => {
    onDataSubmit(inputData);
    setInputData({ ProductId: '', SellingPrice: '', ProductName: '' });
  };

  return (
    <div>
      <div>
        <label>Product Id:</label>
        <input
          type="text"
          value={inputData.ProductId}
          onChange={(event) => handleInputChange(event, 'ProductId')}
          onKeyPress={handleEnterPress}
          placeholder="Enter Product Id"
        />
      </div>
      <div>
        <label>Selling Price:</label>
        <input
          type="number"
          value={inputData.SellingPrice}
          onChange={(event) => handleInputChange(event, 'SellingPrice')}
          onKeyPress={handleEnterPress}
          placeholder="Enter Selling Price"
        />
      </div>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={inputData.ProductName}
          onChange={(event) => handleInputChange(event, 'ProductName')}
          onKeyPress={handleEnterPress}
          placeholder="Enter Product Name"
        />
      </div>
      <button onClick={handleDataSubmit}>Add Product</button>
    </div>
  );
}

export default InputForm;

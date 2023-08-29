import React from 'react';

function DataSection({ option, dataList, onDelete }) {
  const filteredData = dataList.filter(item => item.option === option);

  return (
    <div>
      <h2>{option}</h2>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.option} - {item.ProductId} - {item.SellingPrice} - {item.ProductName}
            <button onClick={() => onDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataSection;

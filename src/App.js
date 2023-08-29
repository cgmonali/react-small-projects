import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import DataDisplay from './components/DataDisplay';

function App() {
  const [selectedOption, setSelectedOption] = useState('Electronics');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('dataList');
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  };
  const updateLocalStorage = (updatedList) => {
    setDataList(updatedList);
    localStorage.setItem('dataList', JSON.stringify(updatedList));
  };

  const handleDataSubmit = (inputData) => {
    const newData = { id: Date.now(), option: selectedOption, ...inputData };
    const updatedDataList = [...dataList, newData];
    updateLocalStorage(updatedDataList);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDelete = (itemToDelete) => {
    const updatedDataList = dataList.filter(item => item.id !== itemToDelete.id);
    updateLocalStorage(updatedDataList);
  };

  return (
    <div>
      <div>
        <label>Choose a category</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Electronics">Electronics Items</option>
          <option value="Food">Food Items</option>
          <option value="Skincare">Skincare Items</option>
        </select>
      </div>
      <InputForm onDataSubmit={handleDataSubmit} />
      <DataDisplay
        selectedOption={selectedOption}
        dataList={dataList}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

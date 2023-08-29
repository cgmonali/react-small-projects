import React from 'react';
import DataSection from './DataSection';

function DataDisplay({ selectedOption, dataList, onDelete }) {
  return (
    <div>
      <DataSection
        option="Electronics"
        dataList={dataList}
        onDelete={onDelete}
      />
      <DataSection option="Food" dataList={dataList} onDelete={onDelete} />
      <DataSection
        option="Skincare"
        dataList={dataList}
        onDelete={onDelete}
      />
    </div>
  );
}

export default DataDisplay;

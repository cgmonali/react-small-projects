import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const ascsortedList = useMemo(() => {
    console.log('Items sorted in ascending order');
    return [...items].sort((a, b) => a - b); // Make a copy of the array
  }, [items]);

  const descsortedList = useMemo(() => {
    console.log('Items sorted in descending order');
    return [...items].sort((a, b) => b - a); // Make a copy of the array
  }, [items]);
  
//the below method modified the original array,which should not be the way,we should make a copy of the items array before sorting it in ascending and descending orders.
//   const ascsortedList = useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => a - b);
//   }, [items]); 
//   console.log('DemoList RUNNING');

//   const descsortedList = useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => b - a);
//   }, [items]); 


  const sortedList=props.butstate?descsortedList:ascsortedList;

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
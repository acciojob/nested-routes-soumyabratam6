// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { itemName } = useParams();
  
  return (
    <div>
      <h3>Details for {itemName.charAt(0).toUpperCase() + itemName.slice(1)}</h3>
      <p>This is a detailed description of {itemName}.</p>
    </div>
  );
};

export default ItemDetail;

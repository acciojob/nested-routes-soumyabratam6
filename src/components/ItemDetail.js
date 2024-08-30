// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { itemName } = useParams();
  
  return (
    <div>
      <h3> {itemName.charAt(0).toUpperCase() + itemName.slice(1)}</h3>
    </div>
  );
};

export default ItemDetail;

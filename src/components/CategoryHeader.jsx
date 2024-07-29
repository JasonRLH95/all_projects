import React from 'react';
import '../style/categoryHeader.css';

export default function CategoryHeader(props) {
  return (
    <h2 className='categoryHeader'>{props.headerName}</h2>
  )
}

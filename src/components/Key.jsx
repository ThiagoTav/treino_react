import React from 'react'
import './styles/Key.css';

export default function Key({value, width, height, onClick}) {
    const handleClick = () => {
        onClick(value);
    }

  return (
    <button onClick = {handleClick}>{value}</button>
  )
}

import React from 'react';

const initSize = 24;

const ReviewIcon = ({ width, height, size = 16 }) =>     
  <svg 
    width={width || size} 
    height={height || size} 
    viewBox={`0 0 ${width || size} ${height || size}`} 
    style={{ width: `${width || size}px`, height: `${height || size}px`, }} 
    xmlns="http://www.w3.org/2000/svg">
    <g style={ {transform: `scale(${(width || size)/initSize})` } }>
      <path strokeWidth="1" d="M5.5,21 C7.98528137,21 10,18.9852814 10,16.5 C10,14.0147186 7.98528137,12 5.5,12 C3.01471863,12 1,14.0147186 1,16.5 C1,18.9852814 3.01471863,21 5.5,21 Z M1,16 L1,7 L1,6.5 C1,4.01471863 3.01471863,2 5.5,2 L6,2 M23,16 L23,7 L23,6.5 C23,4.01471863 20.9852814,2 18.5,2 L18,2 M18.5,21 C20.9852814,21 23,18.9852814 23,16.5 C23,14.0147186 20.9852814,12 18.5,12 C16.0147186,12 14,14.0147186 14,16.5 C14,18.9852814 16.0147186,21 18.5,21 Z M10,17 C10,17 10,15 12,15 C14,15 14,17 14,17"/>
    </g>
  </svg>

  export default ReviewIcon;
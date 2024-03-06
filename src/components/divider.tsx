import React from 'react';

interface DividerProps {
  color?: string;
}

const Divider: React.FC<DividerProps> = ({ color = '#9C9898' }) => {
  return (
    <div
      style={{
        margin: 'auto',        
        width: '98%',
        height: '5px',
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Divider;

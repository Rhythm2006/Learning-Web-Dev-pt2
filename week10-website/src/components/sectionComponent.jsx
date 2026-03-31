import React from 'react';

function SectionComponent({ image, index }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      margin: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt={index} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', maxHeight: '200px' }} />
      <h3 style={{ marginTop: '16px', color: '#333', fontSize: '20px', fontWeight: '600' }}>{index}</h3>
    </div>
  );
}

export default SectionComponent;

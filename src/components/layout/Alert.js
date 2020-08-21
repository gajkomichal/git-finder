import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className='alert' style={alertStyle}>
        {alert.msg}
      </div>
    )
  );
};

const alertStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignitems: 'center',
  margin: '0 auto',
  width: '600px',
  height: '50px',
  backgroundColor: '#000',
  borderRadius: '0px',
  textAlign: 'center',
  color: '#fff',
};

export default Alert;

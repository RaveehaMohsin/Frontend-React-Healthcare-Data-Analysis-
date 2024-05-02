import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 100000000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAlert && (
        <div
          style={{
            position: 'fixed',
            bottom: 300,
            left: 300,
            right: 200,
            zIndex: 1000,
            
          }}
        >
          <Alert
            key="info"
            variant="info"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Alert— Your treatment hasn't been done yet!
          </Alert>
        </div>
      )}
    </>
  );
}

export default BasicExample

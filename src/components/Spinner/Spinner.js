import ReactDOM from 'react-dom';
import { RotatingSquare } from 'react-loader-spinner';

export const Spinner = () => {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <RotatingSquare
        height="100"
        width="100"
        color="#F2C94C"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>,
    document.getElementById('spinner-root')
  );
};


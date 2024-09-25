import { Link } from 'react-router-dom';
import styles from '../Navbar/navbar.module.css';


interface ModalProps {
  isOpen: boolean;
  setModalOpen: () => void;
  children: React.ReactNode;
}

const BACKGROUND_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fixed rgba usage
  zIndex: 1000,
};

const MODAL_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '150px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black',
};

const closeBtnStyle: React.CSSProperties = {
  cursor: 'pointer',
  color: 'white',
  backgroundColor: '#1D4ED8',
  fontWeight: 500,
  borderRadius: '0.5rem',
  fontSize: '1rem',
  lineHeight: '2rem',
  padding: '0.7rem 2rem',
  textAlign: 'center',
  marginRight: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  border: 'none',
};

const Modal: React.FC<ModalProps> = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div className={styles.contain} style={{ cursor: 'pointer' }} onClick={setModalOpen}> 
          <i id={styles.check} className="bi bi-check-circle-fill"></i>           
            <Link className={styles.link} to='/' style={closeBtnStyle} onClick={setModalOpen}>            
              Back
            </Link>
          </div>
          <div>{children}</div>         
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;

import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.scss';

const Backdrop = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({title, message, handleClick}) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={handleClick}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = ({title, message, clearError}) => {

    const handleClick = () => {
        clearError();
    };

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={handleClick}/>, 
            document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={title} 
            message={message}
            handleClick={handleClick}
            />, 
            document.getElementById('overlay-root'))}
        </>
    )
};

export default ErrorModal;
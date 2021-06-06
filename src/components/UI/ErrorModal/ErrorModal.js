import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.scss';

const ErrorModal = ({title, message, clearError}) => {

    const handleClick = () => {
        clearError();
    };

    return (
        <>
        <div className={styles.backdrop} />
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
        </>
    )
};

export default ErrorModal;
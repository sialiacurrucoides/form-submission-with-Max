import styles from './Card.module.scss';

const Card = ({children, className}) => {

    return (
        <div className={`${styles.card} ${className}`}>{children}</div>
    );
};

export default Card;
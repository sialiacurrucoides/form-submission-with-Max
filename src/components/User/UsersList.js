import Card from '../UI/Card/Card';
import styles from './UsersList.module.scss';

const UsersList = ({users}) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map(user => (
                <li key={`${user.name} - ${Math.floor(Math.random()*100)}`}>
                    {user.name} ({user.age} years old)
                </li>))}
            </ul>
        </Card>
    );
};

export default UsersList;
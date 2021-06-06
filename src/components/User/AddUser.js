
import React, {useState} from 'react';

import styles from './AddUser.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = ({addUser}) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty value)."
            });
            return;
        }
        if (Number(enteredAge) < 0){
            setError({
                title: "Invalid age",
                message: "The age should be a positive number."
            });
            return;
        }
        setEnteredUsername('');
        setEnteredAge('');
        addUser(enteredUsername, enteredAge);
    };

    const clearError = () => {
        setError();
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
    <>
    {!!error && <ErrorModal title={error.title} message={error.message} clearError={clearError}/>}
    <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
            <Button type="submit">Add user</Button>
        </form>
    </Card>
    </>);
};

export default AddUser;
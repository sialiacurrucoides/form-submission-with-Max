
import React, {useState, useRef} from 'react';

import styles from './AddUser.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = ({addUser}) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty value)."
            });
            return;
        }
        if (Number(enteredUserAge) < 0){
            setError({
                title: "Invalid age",
                message: "The age should be a positive number."
            });
            return;
        }
        addUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const clearError = () => {
        setError();
    };

    return (
    <>
    {!!error && <ErrorModal title={error.title} message={error.message} clearError={clearError}/>}
    <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" 
            id="username" 
            ref={nameInputRef}
            />
            <label htmlFor="age">Age</label>
            <input 
            type="number" 
            id="age" 
            
            ref={ageInputRef}
            />
            <Button type="submit">Add user</Button>
        </form>
    </Card>
    </>);
};

export default AddUser;
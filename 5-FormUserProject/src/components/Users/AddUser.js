import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(userName, userAge);
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (+userAge < 1) {
      return;
    }

    setUserName('');
    setUserAge('');
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" value={userName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" name="age" onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

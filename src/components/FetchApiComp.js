import React, { useEffect, useState } from "react";
import UserDataComp from "./UserDataComp";

const FetchApiComp = (props) => {
  const [userApi, setUserApi] = useState([]);

  const getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setUserApi(data);
  };

  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <>
      <h1>{props.name}</h1>
      <UserDataComp users={userApi} />
    </>
  );
};

export default FetchApiComp;

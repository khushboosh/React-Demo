import React, { useEffect, useState } from "react";
import UserDataComp from "./UserDataComp";

const FetchApiComp = (props) => {
  const [userApi, setUserApi] = useState(null);

  const getUsersData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      const data = await response.json();
      setUserApi(data);
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };

  /* useEffect(() => {
    getUsersData();
  }, []); */

  return (
    <>
      <h1>{props.name}</h1>
      <UserDataComp users={userApi} onClickApiCall={getUsersData} />
    </>
  );
};

export default FetchApiComp;

import React from "react";
import { FirstName, LastName, Phone } from "../App";

const UseContextCompC = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      <Phone.Consumer>
                        {(phone) => {
                          return (
                            <>
                              <h1>
                                Welcome to my channel {fname}
                                {lname} {phone}
                              </h1>
                            </>
                          );
                        }}
                      </Phone.Consumer>
                    </>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
};

export default UseContextCompC;

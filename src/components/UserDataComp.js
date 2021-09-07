import React from 'react'

const UserDataComp = (props) => {
    
    return (
        props.users.map((currElem) => {
            return (
              <div  key ={currElem.id}>
                <h1>{props.name}</h1>
                <div className ="card" style={{ color: "red" }} >
                  <div className="card-body">
                  <h4 className="card-title">{currElem.id}</h4>
                    <h5 className="card-title">{currElem.title}</h5>
                    <p className="card-text">
                      {currElem.id}
                    </p>
                    <p className="card-text">
                      {currElem.url}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
    )
};

export default UserDataComp

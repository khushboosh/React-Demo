import React from "react";
import { Button } from "@material-ui/core";
const ListItems = (props) => {
  return (
    <div>
      <>
        <li>{props.text} </li>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.onSelect(props.id)}
        >
          DELETE <i className="fas fa-trash-alt"></i>
        </Button>
        <Button
          variant="contained"
          style={{ color: "green" }}
          onClick={() => props.onEdit(props.id)}
        >
          EDIT <i className="fa fa-edit"></i>
        </Button>
      </>
    </div>
  );
};

export default ListItems;

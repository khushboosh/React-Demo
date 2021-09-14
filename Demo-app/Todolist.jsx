import { Input, Container, Button } from "@material-ui/core";
import React, { useState } from "react";
import ListItems from "./ListItems";
const Todolist = () => {
  const [inputData, setInputData] = useState("");
  const [inputItemsArray, setInputItemsArray] = useState([]);
  const [toggleButton, settoggleButton] = useState(true);
  const [selectedId, setselectedId] = useState(null);
  const inputEvent = (event) => {
    setInputData(event.target.value);
  };
  const addDataHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (!inputData) {
      alert("Pease add the items first...");
    } else if (inputData && !toggleButton) {
      setInputItemsArray(
        inputItemsArray.map((currElem) => {
          if (currElem.id === selectedId) {
            console.log("Selected id" + selectedId);
            return {
              ...currElem,
              item: inputData,
            };
          }
          return currElem;
        })
      );
      settoggleButton(true);

      setInputData("");

      setselectedId(null);
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        item: inputData,
      };
      setInputItemsArray((oldData) => {
        return [...oldData, newInputData];
      });
      setInputData("");
    }
  };
  const deleteItems = (id) => {
    console.log("deleted" + id);
    const deletedItem = inputItemsArray.filter((currElem) => {
      return currElem.id !== id;
    });
    console.log("deleted object " + deletedItem.id, deletedItem.item);
    setInputItemsArray(deletedItem);
  };
  const editItems = (id) => {
    console.log("edited" + id);
    const editedId = inputItemsArray.find((currElem) => {
      return currElem.id === id;
    });
    console.log("matching object with the id" + editedId.id, editedId.item);
    settoggleButton(false);
    //here we are setting the name of the data you want to edit in the input field
    setInputData(editedId.item);
    //here we are setting  the id  that we are getting from the function and that you want to update

    setselectedId(id);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Input
          type="text"
          value={inputData}
          onChange={inputEvent}
          placeholder="Add items here"
          required
        />
        {toggleButton ? (
          <Button
            variant="contained"
            color="primary"
            title="add"
            onClick={addDataHandler}
          >
            Add To Cart<i className="fas fa-cart-plus"></i>
          </Button>
        ) : (
          <Button
            style={{ color: "red" }}
            variant="outlined"
            title="edit"
            onClick={addDataHandler}
          >
            Edit Items <i className="fa fa-edit"></i>
          </Button>
        )}

        <ol className="d-flex">
          {inputItemsArray.length > 0 ? (
            inputItemsArray.map((currElem) => {
              return (
                <div key={currElem.id}>
                  <ListItems
                    text={currElem.item}
                    onSelect={deleteItems}
                    onEdit={editItems}
                    id={currElem.id}
                  />
                </div>
              );
            })
          ) : (
            <span>"No more items left in the list"</span>
          )}
        </ol>
      </Container>
    </div>
  );
};

export default Todolist;

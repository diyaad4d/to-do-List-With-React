import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Heading from "./Heading";
function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText) {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
    }

    function deleteItem(id) {
        setItems((prevValues) => {
            return prevValues.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <Heading />
            <InputArea onAdd={addItem} />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            input={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

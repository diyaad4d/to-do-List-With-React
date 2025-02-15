import React from "react";
import { useState } from "react";

function ToDoItem(props) {
    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li>{props.input}</li>
        </div>
    );
}

export default ToDoItem;

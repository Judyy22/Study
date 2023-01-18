import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    // console.log("ExpenseItem evaluated by React");

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    };

    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </div>
    );
};

export default ExpenseItem;

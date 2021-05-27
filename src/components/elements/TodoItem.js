import React, { useEffect } from "react";
import removeIcon from "../../assets/images/remove.png";
import { itemStatus } from "../../constants";
import { itemContext } from "../../context";

export default function TodoItem(props) {
    const [checked, setChecked] = React.useState(
        props.status === "active" ? false : true
    );
    const { items, onRemoveItem, onToggleItem } = React.useContext(itemContext);

    const checkItem = () => {
        setChecked((prev) => !prev);
        onToggleItem(props.id);
    };

    useEffect(() => {
        const item = items.find((item) => item.id === props.id);
        if (!item) return false;
        setChecked(item.status === itemStatus.ACTIVE ? false : true);
    }, [items]);

    return (
        <div className="todoItem">
            <div className="checkBox">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => checkItem()}
                />
            </div>
            <div
                className="itemName"
                style={{ textDecoration: checked && "line-through" }}
            >
                <p>{props.name}</p>
            </div>
            <img
                onClick={() => onRemoveItem(props.id)}
                src={removeIcon}
                alt="delete"
            ></img>
        </div>
    );
}

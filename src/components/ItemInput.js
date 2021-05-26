import React, { useState } from "react";
import { itemContext } from "../context";

export default function ItemInput() {
    const [name, setName] = useState("");
    const { onAddItem } = React.useContext(itemContext);
    const onEnterName = (e) => {
        if (e.key === "Enter") {
            if (name.length === 0) {
                alert("Name should not empty !");
                return;
            }
            onAddItem(name);
            setName("");
        }
    };

    return (
        <input
            className="itemInput"
            placeholder="Enter todo name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => onEnterName(e)}
        />
    );
}

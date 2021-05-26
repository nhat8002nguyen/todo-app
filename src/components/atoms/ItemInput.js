import React, { useState } from "react";
import { itemContext } from "../../Context";

export default function ItemInput() {
    const [name, setName] = useState("");
    const { onAddItem } = React.useContext(itemContext);
    const onEnterName = (e) => {
        if (e.key === "Enter") {
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

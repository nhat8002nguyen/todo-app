import React, { useContext } from "react";
import { itemContext, filterType } from "../../context";

export default function ToggleButton() {
    const { items, filter, onToggleItem } = useContext(itemContext);

    const toggleAll = () => {
        if (filter === filterType.all) {
            items.forEach((item) => onToggleItem(item.id));
        } else {
            items
                .filter(
                    (item) =>
                        item.status ===
                        (filter === filterType.active ? "active" : "done")
                )
                .forEach((item) => onToggleItem(item.id));
        }
    };
    return (
        <input
            type="button"
            onClick={() => toggleAll()}
            className="toggleButton"
            value="Toggle All"
        />
    );
}
